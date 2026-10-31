const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || 'https://unclecheng-li.github.io';
    if (request.method === 'OPTIONS') return cors(null, origin);
    const url = new URL(request.url);

    if (url.pathname === '/api/stats/health' && request.method === 'GET') {
      return json({ ok: true }, 200, origin);
    }
    if (url.pathname === '/api/stats/visit' && request.method === 'POST') {
      return recordVisit(request, env, origin);
    }
    if (url.pathname === '/api/stats/summary' && request.method === 'GET') {
      return readSummary(env.DB, origin);
    }
    if (url.pathname.startsWith('/api/stats/')) {
      return json({ error: 'Method not allowed' }, 405, origin);
    }
    return json({ error: 'Not found' }, 404, origin);
  },
};

async function recordVisit(request, env, origin) {
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 2048) return json({ error: 'Payload too large' }, 413, origin);
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Invalid JSON' }, 400, origin);
  }
  const visitorId = String(body.visitorId || '');
  if (!/^[A-Za-z0-9_-]{16,80}$/.test(visitorId)) {
    return json({ error: 'Invalid visitor ID' }, 400, origin);
  }
  const salt = env.VISITOR_SALT;
  if (!salt || salt.length < 24) {
    return json({ error: 'Statistics salt is not configured' }, 503, origin);
  }
  const visitorHash = await sha256(`${salt}:${visitorId}`);
  const day = new Date().toISOString().slice(0, 10);
  try {
    await env.DB.batch([
      env.DB.prepare(
        'INSERT INTO visitor_days (day, visitor_hash) VALUES (?, ?) ON CONFLICT(day, visitor_hash) DO NOTHING',
      ).bind(day, visitorHash),
      env.DB.prepare(
        `INSERT INTO daily_metrics (day, page_views) VALUES (?, 1)
         ON CONFLICT(day) DO UPDATE SET page_views = page_views + 1, updated_at = CURRENT_TIMESTAMP`,
      ).bind(day),
    ]);
    return json({ ok: true }, 202, origin);
  } catch {
    return json({ error: 'Statistics are temporarily unavailable' }, 503, origin);
  }
}

async function readSummary(db, origin) {
  const today = new Date().toISOString().slice(0, 10);
  const start = utcDay(-29);
  try {
    const [dauRow, mauRow, visitorRows, pageRows] = await db.batch([
      db.prepare('SELECT COUNT(*) AS count FROM visitor_days WHERE day = ?').bind(today),
      db.prepare('SELECT COUNT(DISTINCT visitor_hash) AS count FROM visitor_days WHERE day >= ?').bind(start),
      db.prepare('SELECT day, COUNT(*) AS visitors FROM visitor_days WHERE day >= ? GROUP BY day ORDER BY day').bind(start),
      db.prepare('SELECT day, page_views FROM daily_metrics WHERE day >= ? ORDER BY day').bind(start),
    ]);
    const visitors = new Map(visitorRows.results.map(row => [row.day, Number(row.visitors)]));
    const pageViews = new Map(pageRows.results.map(row => [row.day, Number(row.page_views)]));
    const trend = Array.from({ length: 30 }, (_, index) => {
      const day = utcDay(index - 29);
      return { day, visitors: visitors.get(day) || 0, pageViews: pageViews.get(day) || 0 };
    });
    return json({
      ok: true,
      timezone: 'UTC',
      dau: Number(dauRow.results[0]?.count || 0),
      mau: Number(mauRow.results[0]?.count || 0),
      trend,
      updatedAt: new Date().toISOString(),
    }, 200, origin);
  } catch {
    return json({ error: 'Statistics are temporarily unavailable' }, 503, origin);
  }
}

function utcDay(offset) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0, 10);
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...JSON_HEADERS, ...corsHeaders(origin), 'Cache-Control': 'no-store' },
  });
}

function cors(body, origin) {
  return new Response(body, { status: 204, headers: corsHeaders(origin) });
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}
