# 星伴匿名访问统计后台

下载量直接读取 GitHub Releases，不经过此 Worker。这里只统计匿名官网访客的 DAU、MAU 与页面访问趋势。

## 数据边界

- 浏览器生成随机访客 ID；Worker 使用 `VISITOR_SALT` 加盐哈希后按日去重。
- 不写入 IP、QQ 号、聊天记录、模型配置或任何聊天数据。
- DAU 为当日 UTC 去重访客，MAU 为最近 30 个 UTC 日期去重访客。
- 下载量以 GitHub Release 资产的 `download_count` 为准，与网页下载按钮点击次数不同。

## 部署

需要 Cloudflare 账号与 Wrangler 登录：

```bash
npx --yes wrangler@4 login
npx --yes wrangler@4 d1 create starlit_stats
```

把命令返回的 `database_id` 填入 `wrangler.toml`，再执行：

```bash
npx --yes wrangler@4 d1 execute starlit_stats --file=./cloudflare/schema.sql --remote
npx --yes wrangler@4 secret put VISITOR_SALT
npx --yes wrangler@4 deploy --config ./cloudflare/wrangler.toml
```

最后把 Worker 的 HTTPS 地址写入 `docs/stats-config.js`：

```js
window.STARLIT_STATS_API = 'https://你的 Worker 域名';
```

未配置时，官网只显示真实 GitHub 下载量，DAU／MAU 会明确显示“待接入”，不会生成模拟数据。
