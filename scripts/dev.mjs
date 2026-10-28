import http from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
const readArg = (name, fallback) => {
  const inline = args.find((arg) => arg.startsWith(`--${name}=`));
  if (inline) return inline.split('=').slice(1).join('=');
  const index = args.indexOf(`--${name}`);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const port = Number(readArg('port', process.env.PORT || 7100));
const host = readArg('host', '0.0.0.0');
const root = fileURLToPath(new URL('../docs/', import.meta.url));
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.exe': 'application/vnd.microsoft.portable-executable',
};

const server = http.createServer((req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = normalize(pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, ''));
    if (relative.startsWith('..')) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    const file = join(root, relative);
    const stat = statSync(file);
    if (!stat.isFile()) throw new Error('Not a file');
    const headers = {
      'Content-Type': mime[extname(file).toLowerCase()] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    };
    if (extname(file) === '.exe') headers['Content-Disposition'] = `attachment; filename="${relative.split(/[\\/]/).pop()}"`;
    res.writeHead(200, headers);
    if (req.method === 'HEAD') res.end();
    else createReadStream(file).pipe(res);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('页面不存在 / Not found');
  }
});

server.listen(port, host, () => {
  console.log(`星伴主页已启动：http://localhost:${port}/`);
});
