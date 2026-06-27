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

## GitHub Pages

仓库可发布到 GitHub Pages 项目页：

```text
https://dyzz.github.io/dream-quest-wiki/
```

GitHub Actions 使用：

```bash
VITEPRESS_BASE=/dream-quest-wiki/ npm run build:github
```

`build:github` 会先执行常规构建，再把生成产物里面原本面向根域名的 `/cards`、`/assets/...` 等站内路径改写成 `/dream-quest-wiki/...`。本地预览和 EdgeOne 部署仍使用普通 `npm run build`。

## 目录说明

- `docs/`：VitePress 文档、主题配置和当前生成出的 Markdown 页面。
- `scripts/`：从解析数据生成 wiki 页面的脚本。
- `source/`：wiki 生成所需的解析输入和已引用资源，保证仓库脱离父目录后仍可构建。
- `edgeone.json`：EdgeOne Pages 部署配置。
- `vercel.json`：Vercel 部署配置。

生成产物、登录缓存、`node_modules`、Playwright 记录和平台构建缓存不入库。

## 声明

这是非官方中文玩家资料站，用于机制研究和资料整理。Dream Quest 及相关素材版权归原作者所有。
