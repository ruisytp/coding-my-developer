# 贡献指南

感谢您对本项目的关注和贡献！在提交您的贡献之前，请花一点时间阅读以下指南。

## 代码风格

### Vue 组件
- 使用 `<script setup>` 语法
- 组件命名使用 PascalCase（大驼峰）
- 变量和函数命名使用 camelCase（小驼峰）
- 使用 TypeScript 进行类型定义

### 样式
- 优先使用 Tailwind CSS 工具类
- 避免内联样式
- 自定义样式放在 `src/style.css` 中

### 代码格式化
- 使用 Prettier 进行代码格式化
- 使用 ESLint 进行代码检查
- 提交前运行 `npm run lint` 和 `npm run format`

## 开发流程

### 1. Fork 仓库
点击 GitHub 页面右上角的 "Fork" 按钮，将仓库 fork 到您的个人账户。

### 2. 克隆仓库
```bash
git clone https://github.com/your-username/my-developer-vue.git
cd my-developer-vue
```

### 3. 创建分支
```bash
git checkout -b feature/your-feature-name
# 或者
git checkout -b fix/your-bug-fix
```

### 4. 安装依赖
```bash
npm install
```

### 5. 开发和测试
```bash
# 启动开发服务器
npm run dev

# 运行单元测试
npm run test:unit

# 运行 E2E 测试
npm run test:e2e

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 6. 提交更改
```bash
git add .
git commit -m "feat: add new feature"
# 或
git commit -m "fix: resolve issue with component"
```

### 7. 推送到 GitHub
```bash
git push origin feature/your-feature-name
```

### 8. 创建 Pull Request
在 GitHub 上创建 Pull Request，填写 PR 模板中的所有信息。

## 提交消息规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响代码逻辑）
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 构建过程或辅助工具的变动

示例：
- `feat: add contact form component`
- `fix: resolve responsive layout issue`
- `docs: update README with deployment instructions`

## 测试要求

- 所有新功能都应该有相应的单元测试
- 确保所有现有测试通过
- 对于 UI 相关的更改，建议添加 E2E 测试

## 问题报告

如果您发现 bug 或想要提出新功能，请使用相应的 issue 模板：
- [Bug 报告模板](https://github.com/your-username/my-developer-vue/issues/new?template=bug_report.yml)
- [功能请求模板](https://github.com/your-username/my-developer-vue/issues/new?template=feature_request.yml)

## 许可证

通过提交贡献，您同意您的贡献将根据项目的 [MIT 许可证](LICENSE) 进行授权。

---

再次感谢您的贡献！🎉