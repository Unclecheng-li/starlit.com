'use strict';

const { spawn, spawnSync } = require('node:child_process');
const { mkdirSync, writeFileSync } = require('node:fs');
const { resolve } = require('node:path');

const root = resolve(__dirname, '..');
const artifacts = resolve(root, 'artifacts');
const electron = resolve('C:/Users/UncleC/Desktop/vol/专属AI伴侣/companion/build/rc10-installer/win-unpacked/星伴.exe');
const origin = 'http://127.0.0.1:7183';
const sleep = ms => new Promise(done => setTimeout(done, ms));
let server;
let browser;
let socket;
const errors = [];
mkdirSync(artifacts, { recursive: true });

async function main() {
  server = spawn(process.execPath, [resolve(root, 'scripts/dev.mjs'), '--host', '127.0.0.1', '--port', '7183'], {
    cwd: root, stdio: 'ignore', windowsHide: true,
  });
  for (let attempt = 0; attempt < 60; attempt++) {
    try { if ((await fetch(origin)).ok) break; } catch { /* wait */ }
    if (server.exitCode !== null) throw new Error('预览服务提前退出');
    await sleep(100);
  }
  const env = { ...process.env, STARLIT_DATA_ROOT: resolve(artifacts, 'browser-data') };
  delete env.ELECTRON_RUN_AS_NODE;
  browser = spawn(electron, ['--remote-debugging-port=9333'], {
    env, stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true,
  });
  browser.stdout.on('data', chunk => console.log(`[浏览器] ${String(chunk).trim()}`));
  browser.stderr.on('data', chunk => console.error(`[浏览器错误] ${String(chunk).trim()}`));
  let pages;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      pages = await (await fetch('http://127.0.0.1:9333/json/list')).json();
      if (pages.some(page => page.type === 'page' && page.webSocketDebuggerUrl)) break;
    } catch { /* wait */ }
    if (browser.exitCode !== null) throw new Error(`验收浏览器提前退出：${browser.exitCode}`);
    await sleep(150);
  }
  const page = pages?.find(item => item.type === 'page' && item.webSocketDebuggerUrl);
  if (!page) throw new Error('没有找到官网验收页面');
  socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((done, fail) => {
    socket.addEventListener('open', done, { once: true });
    socket.addEventListener('error', fail, { once: true });
  });
  let nextId = 0;
  const pending = new Map();
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data);
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails);
    if (!data.id || !pending.has(data.id)) return;
    const { done, fail } = pending.get(data.id);
    pending.delete(data.id);
    data.error ? fail(new Error(JSON.stringify(data.error))) : done(data.result);
  });
  const cdp = (method, params = {}) => new Promise((done, fail) => {
    const id = ++nextId;
    pending.set(id, { done, fail });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const result = await cdp('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
    return result.result.value;
  };
  const navigate = async url => {
    await cdp('Page.navigate', { url });
    await sleep(900);
  };
  const shot = async name => {
    const image = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    const path = resolve(artifacts, `${name}.png`);
    writeFileSync(path, Buffer.from(image.data, 'base64'));
    return path;
  };
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  await cdp('Runtime.enable');
  await cdp('Page.enable');
  await cdp('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate(`${origin}/`);
  for (let attempt = 0; attempt < 60; attempt++) {
    if (await evaluate(`document.querySelectorAll('.character-card').length === 10 && document.querySelectorAll('.community-card').length === 2`)) break;
    await sleep(150);
  }
  const initial = await evaluate(`({
    cards: document.querySelectorAll('.character-card').length,
    communities: document.querySelectorAll('.community-card').length,
    selection: getComputedStyle(document.querySelector('.character-card')).userSelect,
    overflow: (() => { const x = scrollX; window.scrollTo(80, scrollY); const moved = scrollX !== x; window.scrollTo(x, scrollY); return moved; })(),
    widths: [innerWidth, document.body.scrollWidth, document.documentElement.scrollWidth]
  })`);
  assert(initial.cards === 10 && initial.communities === 2, `页面结构不完整：${JSON.stringify(initial)}`);
  assert(initial.selection === 'none' && !initial.overflow, `长廊选择或溢出异常：${JSON.stringify(initial)}`);

  await evaluate(`document.querySelector('#characters').scrollIntoView()`);
  await sleep(350);
  const drag = await evaluate(`(() => {
    const card = document.querySelector('.character-card');
    const rect = card.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, before: document.querySelector('#characterViewport').scrollLeft };
  })()`);
  await cdp('Input.dispatchMouseEvent', { type: 'mousePressed', ...drag, button: 'left', clickCount: 1 });
  await cdp('Input.dispatchMouseEvent', { type: 'mouseMoved', x: drag.x - 170, y: drag.y, button: 'left', buttons: 1 });
  await cdp('Input.dispatchMouseEvent', { type: 'mouseReleased', x: drag.x - 170, y: drag.y, button: 'left', clickCount: 1 });
  await sleep(250);
  const dragResult = await evaluate(`({ selection: getSelection().toString(), after: document.querySelector('#characterViewport').scrollLeft })`);
  assert(!dragResult.selection && dragResult.after !== drag.before, `拖动验收失败：${JSON.stringify(dragResult)}`);

  const names = [];
  await evaluate(`document.querySelector('.character-card').click()`);
  await sleep(200);
  for (let index = 0; index < 10; index++) {
    const state = await evaluate(`({ open: document.querySelector('#characterDialog').open, name: document.querySelector('#dialogName').textContent, profile: !!document.querySelector('.dialog-profile'), navigation: document.querySelectorAll('[data-character-step]').length })`);
    assert(state.open && state.profile && state.navigation === 2, `角色弹窗不完整：${JSON.stringify(state)}`);
    names.push(state.name);
    if (index === 0) await shot('home-character-desktop');
    await evaluate(`document.querySelector('[data-character-step="1"]').click()`);
  }
  assert(new Set(names).size === 10 && names[0] === '小鸟游星野', `十位角色切换失败：${names.join(',')}`);
  await evaluate(`document.querySelector('#dialogClose').click()`);

  await evaluate(`document.querySelector('#community').scrollIntoView()`);
  await sleep(500);
  const communityShot = await shot('home-community-desktop');
  await evaluate(`document.querySelector('.qr-button').click()`);
  const qr = await evaluate(`({ open: document.querySelector('#qrDialog').open, group: document.querySelector('#qrDialogCopy').dataset.copyGroup })`);
  assert(qr.open && qr.group === '954402631', `二维码弹窗失败：${JSON.stringify(qr)}`);
  await evaluate(`document.querySelector('#qrDialogClose').click()`);
  const copied = await evaluate(`(async () => {
    window.__copiedGroup = '';
    if (navigator.clipboard) navigator.clipboard.writeText = async value => { window.__copiedGroup = value; };
    document.querySelector('[data-copy-group="954402631"]').click();
    await new Promise(resolve => setTimeout(resolve, 250));
    return { value: window.__copiedGroup, toast: document.querySelector('#communityToast').textContent };
  })()`);
  assert(copied.value === '954402631' || copied.toast.includes('已复制'), `群号复制失败：${JSON.stringify(copied)}`);

  await navigate(`${origin}/admin.html`);
  for (let attempt = 0; attempt < 60; attempt++) {
    const value = await evaluate(`document.querySelector('#metricDownloads')?.textContent`);
    if (value && value !== '—') break;
    await sleep(250);
  }
  const admin = await evaluate(`({
    total: document.querySelector('#metricDownloads').textContent,
    windows: document.querySelector('#metricWindows').textContent,
    android: document.querySelector('#metricAndroid').textContent,
    dau: document.querySelector('#metricDau').textContent,
    mau: document.querySelector('#metricMau').textContent,
    releases: document.querySelectorAll('#releaseRows tr').length,
    overflow: (() => { const x = scrollX; window.scrollTo(80, scrollY); const moved = scrollX !== x; window.scrollTo(x, scrollY); return moved; })()
  })`);
  assert(admin.total !== '—' && admin.releases > 0 && !admin.overflow, `后台真实数据失败：${JSON.stringify(admin)}`);
  assert(admin.dau === '待接入' && admin.mau === '待接入', `未配置活跃数据应明确待接入：${JSON.stringify(admin)}`);
  const adminShot = await shot('home-admin-desktop');

  await cdp('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await cdp('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  await navigate(`${origin}/`);
  await evaluate(`document.querySelector('#community').scrollIntoView()`);
  await sleep(500);
  const mobile = await evaluate(`({ width: innerWidth, overflow: (() => { const x = scrollX; window.scrollTo(80, scrollY); const moved = scrollX !== x; window.scrollTo(x, scrollY); return moved; })(), cards: document.querySelectorAll('.community-card').length })`);
  assert(!mobile.overflow && mobile.cards === 2, `手机社群布局失败：${JSON.stringify(mobile)}`);
  const mobileShot = await shot('home-community-mobile');
  await evaluate(`document.querySelector('.character-card').click()`);
  await sleep(200);
  const mobileDialog = await evaluate(`({ open: document.querySelector('#characterDialog').open, width: document.querySelector('#characterDialog').getBoundingClientRect().width, viewport: innerWidth })`);
  assert(mobileDialog.open && mobileDialog.width < mobileDialog.viewport, `手机角色弹窗失败：${JSON.stringify(mobileDialog)}`);
  const mobileDialogShot = await shot('home-character-mobile');
  assert(errors.length === 0, `浏览器脚本异常：${JSON.stringify(errors)}`);
  console.log(JSON.stringify({ ok: true, initial, dragResult, characters: names, copied, admin, mobile, screenshots: [communityShot, adminShot, mobileShot, mobileDialogShot] }, null, 2));
}

main().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
}).finally(async () => {
  if (socket) socket.close();
  await sleep(250);
  if (browser && browser.exitCode === null) spawnSync('taskkill', ['/pid', String(browser.pid), '/t', '/f'], { windowsHide: true });
  if (server && server.exitCode === null) spawnSync('taskkill', ['/pid', String(server.pid), '/t', '/f'], { windowsHide: true });
});
