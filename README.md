# Dream Quest 中文 Wiki

这是 Dream Quest 中文 Wiki 的独立维护仓库。仓库根目录就是 `wiki/`，暂时没有配置 Git remote。

## 本地开发

```bash
npm install
npm run dev -- --port 4180
```

## 构建

```bash
npm run build
```

构建会先执行 `npm run sync`，从 `source/` 里的解析数据重新生成 VitePress 页面，再输出到 `docs/.vitepress/dist`。

## 目录说明

- `docs/`：VitePress 文档、主题配置和当前生成出的 Markdown 页面。
- `scripts/`：从解析数据生成 wiki 页面的脚本。
- `source/`：wiki 生成所需的解析输入和已引用资源，保证仓库脱离父目录后仍可构建。
- `edgeone.json`：EdgeOne Pages 部署配置。
- `vercel.json`：Vercel 部署配置。

生成产物、登录缓存、`node_modules`、Playwright 记录和平台构建缓存不入库。
