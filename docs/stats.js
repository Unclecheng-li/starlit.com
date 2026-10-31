(() => {
  'use strict';

  const API_BASE = String(window.STARLIT_STATS_API || '').replace(/\/$/, '');
  const RELEASES_URL = 'https://api.github.com/repos/Unclecheng-li/starlit.com/releases?per_page=100';
  const numberFormat = new Intl.NumberFormat('zh-CN');
  const formatNumber = value => numberFormat.format(Number(value) || 0);
  const byId = id => document.getElementById(id);

  function storageGet(storage, key) {
    try { return storage.getItem(key); } catch { return null; }
  }
  function storageSet(storage, key, value) {
    try { storage.setItem(key, value); } catch { /* anonymous storage may be unavailable */ }
  }
  function visitorId() {
    const key = 'starlit.analytics.visitor';
    let value = storageGet(localStorage, key);
    if (value && /^[A-Za-z0-9_-]{16,80}$/.test(value)) return value;
    value = globalThis.crypto?.randomUUID?.() ||
      `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
    storageSet(localStorage, key, value);
    return value;
  }

  async function trackVisit() {
    if (!API_BASE || storageGet(sessionStorage, 'starlit.analytics.visited')) return;
    storageSet(sessionStorage, 'starlit.analytics.visited', '1');
    try {
      const response = await fetch(`${API_BASE}/api/stats/visit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId: visitorId() }),
        credentials: 'omit',
        keepalive: true,
      });
      if (!response.ok) storageSet(sessionStorage, 'starlit.analytics.visited', '');
    } catch {
      storageSet(sessionStorage, 'starlit.analytics.visited', '');
    }
  }

  async function fetchDownloads() {
    const response = await fetch(RELEASES_URL, {
      headers: { Accept: 'application/vnd.github+json' },
      credentials: 'omit',
    });
    if (!response.ok) throw new Error(`GitHub API ${response.status}`);
    const releases = await response.json();
    const assets = releases.flatMap(release => (release.assets || [])
      .filter(asset => /\.(exe|apk)$/i.test(asset.name))
      .map(asset => ({
        name: asset.name,
        version: release.tag_name,
        publishedAt: release.published_at,
        platform: /\.exe$/i.test(asset.name) ? 'windows' : 'android',
        downloads: Number(asset.download_count) || 0,
        url: asset.browser_download_url,
      })));
    assets.sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));
    return {
      total: assets.reduce((sum, asset) => sum + asset.downloads, 0),
      windows: assets.filter(asset => asset.platform === 'windows').reduce((sum, asset) => sum + asset.downloads, 0),
      android: assets.filter(asset => asset.platform === 'android').reduce((sum, asset) => sum + asset.downloads, 0),
      assets,
    };
  }

  async function fetchActivity() {
    if (!API_BASE) return { configured: false };
    const response = await fetch(`${API_BASE}/api/stats/summary`, { credentials: 'omit' });
    if (!response.ok) throw new Error(`统计接口 ${response.status}`);
    const data = await response.json();
    if (!data.ok || !Array.isArray(data.trend)) throw new Error('统计接口格式无效');
    return { ...data, configured: true };
  }

  async function loadPublicDownloads() {
    const target = byId('downloadTotal');
    if (!target) return;
    try {
      const downloads = await fetchDownloads();
      target.textContent = formatNumber(downloads.total);
      target.title = `Windows ${formatNumber(downloads.windows)} · Android ${formatNumber(downloads.android)}`;
      byId('downloadStatNote').textContent = '次全端下载 · GitHub Releases 实时数据';
    } catch {
      target.textContent = '—';
      byId('downloadStatNote').textContent = '下载统计暂时不可用 · 下载功能不受影响';
    }
  }

  function renderDownloads(downloads) {
    byId('metricDownloads').textContent = formatNumber(downloads.total);
    byId('metricWindows').textContent = formatNumber(downloads.windows);
    byId('metricAndroid').textContent = formatNumber(downloads.android);
    byId('downloadStatus').textContent = `已同步 ${downloads.assets.length} 个安装包 · ${new Date().toLocaleString('zh-CN')}`;
    byId('releaseRows').innerHTML = downloads.assets.length ? downloads.assets.slice(0, 12).map(asset => `
      <tr>
        <td><span class="release-version">${asset.version}</span><small>${asset.name}</small></td>
        <td><span class="platform-pill ${asset.platform}">${asset.platform === 'windows' ? 'Windows' : 'Android'}</span></td>
        <td class="number-cell">${formatNumber(asset.downloads)}</td>
        <td><a href="${asset.url}" target="_blank" rel="noopener" aria-label="下载 ${asset.name}">↗</a></td>
      </tr>`).join('') : '<tr><td colspan="4" class="empty-cell">暂时没有 Release 安装包数据</td></tr>';
  }

  function renderActivity(activity) {
    const status = byId('activityStatus');
    if (!activity.configured) {
      byId('metricDau').textContent = '待接入';
      byId('metricMau').textContent = '待接入';
      status.textContent = '匿名统计接口尚未配置；此处不会显示模拟数据。';
      byId('activityChart').innerHTML = '<div class="chart-empty"><span>✦</span><strong>等待匿名统计接入</strong><p>下载量不受影响，DAU／MAU 将在 Worker 配置后自动出现。</p></div>';
      return;
    }
    byId('metricDau').textContent = formatNumber(activity.dau);
    byId('metricMau').textContent = formatNumber(activity.mau);
    status.textContent = `匿名访客 · ${activity.timezone || 'UTC'} 日期口径 · 不存储 IP 或聊天数据`;
    const trend = activity.trend.slice(-14);
    const maximum = Math.max(1, ...trend.map(day => Number(day.visitors) || 0));
    byId('activityChart').innerHTML = `<div class="activity-bars">${trend.map(day => {
      const visitors = Number(day.visitors) || 0;
      const height = Math.max(2, Math.round(visitors / maximum * 100));
      const date = day.day.slice(5).replace('-', '/');
      return `<div class="activity-day" title="${day.day}：${visitors} 位访客，${Number(day.pageViews) || 0} 次访问"><span>${visitors}</span><div><i style="height:${height}%"></i></div><small>${date}</small></div>`;
    }).join('')}</div>`;
  }

  function renderDownloadError() {
    ['metricDownloads', 'metricWindows', 'metricAndroid'].forEach(id => { byId(id).textContent = '—'; });
    byId('downloadStatus').textContent = 'GitHub 数据暂时不可用，请稍后刷新。';
    byId('releaseRows').innerHTML = '<tr><td colspan="4" class="empty-cell">暂时无法读取 Release 数据</td></tr>';
  }

  async function loadAdmin() {
    byId('refreshStats')?.classList.add('loading');
    const [downloads, activity] = await Promise.allSettled([fetchDownloads(), fetchActivity()]);
    downloads.status === 'fulfilled' ? renderDownloads(downloads.value) : renderDownloadError();
    if (activity.status === 'fulfilled') renderActivity(activity.value);
    else {
      byId('metricDau').textContent = '—';
      byId('metricMau').textContent = '—';
      byId('activityStatus').textContent = '匿名统计暂时不可用，请稍后刷新。';
      byId('activityChart').innerHTML = '<div class="chart-empty"><strong>暂时无法读取匿名统计</strong><p>请检查 Worker 与 D1 状态。</p></div>';
    }
    byId('refreshStats')?.classList.remove('loading');
  }

  const visit = trackVisit();
  if (byId('adminDashboard')) {
    visit.finally(loadAdmin);
    byId('refreshStats').addEventListener('click', loadAdmin);
  } else {
    loadPublicDownloads();
  }
})();
