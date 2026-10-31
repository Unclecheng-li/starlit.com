import assert from 'node:assert/strict';
import worker from '../cloudflare/worker.js';

const origin = 'https://unclecheng-li.github.io';
const env = { ALLOWED_ORIGIN: origin, VISITOR_SALT: 'test-only-salt-with-32-characters' };
const request = (path, init = {}) => new Request(`https://stats.example${path}`, init);

const health = await worker.fetch(request('/api/stats/health'), env);
assert.equal(health.status, 200);
assert.equal(health.headers.get('Access-Control-Allow-Origin'), origin);
assert.equal((await health.json()).ok, true);

const invalid = await worker.fetch(request('/api/stats/visit', {
  method: 'POST', body: JSON.stringify({ visitorId: 'short' }),
}), env);
assert.equal(invalid.status, 400);

const writes = [];
const writeDb = {
  prepare(sql) {
    return {
      bind(...args) { return { sql, args }; },
    };
  },
  async batch(statements) {
    writes.push(...statements);
    return statements.map(() => ({ success: true }));
  },
};
const accepted = await worker.fetch(request('/api/stats/visit', {
  method: 'POST', body: JSON.stringify({ visitorId: '01234567-89ab-cdef-8123-456789abcdef' }),
}), { ...env, DB: writeDb });
assert.equal(accepted.status, 202);
assert.equal(writes.length, 2);
const storedHash = writes[0].args[1];
assert.match(storedHash, /^[0-9a-f]{64}$/);
assert(!storedHash.includes('01234567'), '数据库不得保存原始访客 ID');

const today = new Date().toISOString().slice(0, 10);
const summaryDb = {
  prepare(sql) {
    return { bind: (...args) => ({ sql, args }) };
  },
  async batch(statements) {
    return statements.map(statement => {
      if (statement.sql.startsWith('SELECT COUNT(*) AS count')) {
        return { results: [{ count: 7 }] };
      }
      if (statement.sql.startsWith('SELECT COUNT(DISTINCT')) {
        return { results: [{ count: 19 }] };
      }
      if (statement.sql.includes('GROUP BY day')) {
        return { results: [{ day: today, visitors: 7 }] };
      }
      return { results: [{ day: today, page_views: 11 }] };
    });
  },
};
const summary = await worker.fetch(request('/api/stats/summary'), { ...env, DB: summaryDb });
const data = await summary.json();
assert.equal(summary.status, 200);
assert.equal(data.dau, 7);
assert.equal(data.mau, 19);
assert.equal(data.trend.length, 30);
assert.equal(data.trend.at(-1).visitors, 7);
assert.equal(data.trend.at(-1).pageViews, 11);
assert.equal(data.trend.at(-2).visitors, 0);

const wrongMethod = await worker.fetch(request('/api/stats/summary', { method: 'POST' }), env);
assert.equal(wrongMethod.status, 405);
console.log('Worker: 健康检查、输入校验、匿名哈希、DAU/MAU 与 30 日趋势测试通过');
