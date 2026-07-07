# LLM Learning Lab 打包说明

这是一个基于 React + TypeScript + Vite + Tailwind CSS 的静态前端教学网站。

## 目录说明

- `src/`：网站源码，包括页面、组件、教程数据、交互式可视化组件。
- `dist/`：已经构建好的静态网页产物，可以部署到 Netlify、Vercel、GitHub Pages 或普通静态服务器。
- `package.json` / `package-lock.json`：项目依赖与脚本配置。
- `vite.config.ts` / `tailwind.config.js` / `tsconfig*.json`：构建、样式和 TypeScript 配置。

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5173/llm-learning-lab/
```

## 构建静态文件

```bash
npm run build
```

构建结果会输出到 `dist/`。

## 直接部署

如果只想部署网页，可以把 `dist/` 目录上传到静态网站托管平台。

## 注意

- 压缩包不包含 `node_modules/`，避免文件过大。
- 项目不包含真实 API Key，也不需要后端服务。
- Prompt Playground 和 LLM 模拟器都是静态教学交互，不会调用付费 API。
