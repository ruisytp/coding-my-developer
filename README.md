# 个人作品集网站

基于 Vue3 + TypeScript + Tailwind CSS + Vite 的现代化个人作品集网站模板。

[![CI](https://github.com/yourusername/my-developer-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/yourusername/my-developer-vue/actions/workflows/ci.yml)
[![Test](https://github.com/yourusername/my-developer-vue/actions/workflows/test.yml/badge.svg)](https://github.com/yourusername/my-developer-vue/actions/workflows/test.yml)

## 技术栈

- **前端框架**: Vue 3 (Composition API + `<script setup>`)
- **编程语言**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS v4
- **代码规范**: ESLint + Prettier

## 功能特性

- 🌙 深色主题设计
- 📱 完全响应式，支持移动端
- 🚀 平滑滚动动画效果
- 💡 渐变色强调设计
- 🔧 可配置的数据驱动内容

## 项目结构

```
src/
├── components/     # 可复用组件
├── data/          # 项目和技能数据
├── App.vue        # 根组件
└── main.ts        # 应用入口
```

## 开发环境

### 前置要求

- Node.js v20.19.0 或更高版本
- npm (或兼容的包管理器)

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

## 测试

### 单元测试

```bash
npm run test:unit
```

### E2E 测试

```bash
# 首次运行需要安装浏览器
npx playwright install
npm run test:e2e
```

## 部署

项目配置了 GitHub Pages 自动部署。推送代码到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

您也可以手动部署到其他平台：
- **Vercel**: 导入仓库，设置构建命令为 `npm run build`，输出目录为 `dist`
- **Netlify**: 导入仓库，设置构建命令为 `npm run build`，发布目录为 `dist`
- **Firebase**: 使用 Firebase Hosting

## VS Code 推荐扩展

项目根目录的 `.vscode/extensions.json` 文件会自动推荐以下扩展：

- Vue Language Features (Volar) - Vue 3 官方语言支持
- Tailwind CSS IntelliSense - Tailwind CSS 智能提示
- ESLint - JavaScript/TypeScript 代码检查
- Prettier - 代码格式化

**注意**: 请禁用 Vetur 扩展，因为它对 Vue 3 `<script setup>` 语法支持不完善。

## 自定义配置

### 修改个人信息

编辑 `src/components/ProfileHeader.vue` 中的 `profile` 对象。

### 添加/修改项目

编辑 `src/data/projects.ts` 文件。

### 添加/修改技能

编辑 `src/data/skills.ts` 文件。

### 修改联系方式

编辑 `src/components/ContactLinks.vue` 中的 `contactLinks` 数组。

## 贡献

欢迎贡献！请阅读 [贡献指南](CONTRIBUTING.md) 了解如何参与项目开发。

- 提交 Issue: 使用 [Bug 报告](https://github.com/yourusername/my-developer-vue/issues/new?template=bug_report.yml) 或 [功能请求](https://github.com/yourusername/my-developer-vue/issues/new?template=feature_request.yml) 模板
- 提交 Pull Request: 填写 [PR 模板](.github/PULL_REQUEST_TEMPLATE.md)

## 行为准则

请阅读我们的 [行为准则](CODE_OF_CONDUCT.md)，共同维护一个友好、包容的社区环境。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 设计参考

- 主要风格参考: [Google Gemini Subscriptions](https://gemini.google/subscriptions/)
- 颜色方案: 深色主题 + 蓝色渐变强调色