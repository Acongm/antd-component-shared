# 项目初始化完成说明

## 📁 项目结构

这是一个完整的 Antd + React + TypeScript 组件库 monorepo 项目。

```
antd-component-shared/
├── lerna.json                    # Lerna 配置
├── .github/
│   └── workflows/                # GitHub Actions
│       ├── ci.yml               # CI 流程（lint/test/build）
│       ├── release.yml          # 发布流程
│       └── docs.yml             # 文档部署
├── docs/                         # 文档站点
│   ├── components/              # 组件文档
│   │   └── FormRenderer.md     # FormRenderer 文档
│   ├── guide/                   # 使用指南
│   │   ├── index.md            # 快速开始
│   │   └── install.md          # 安装指南
│   ├── .dumirc.ts              # Dumi 配置
│   ├── index.md                # 文档首页
│   ├── package.json            # 文档包配置
│   └── tsconfig.json           # 文档 TS 配置
├── packages/
│   ├── components/              # 组件包
│   │   ├── src/
│   │   │   ├── ConfigProvider/ # 配置提供者
│   │   │   │   ├── ConfigProvider.tsx
│   │   │   │   ├── context.ts
│   │   │   │   └── index.ts
│   │   │   ├── FormRenderer/   # 表单渲染器
│   │   │   │   ├── __tests__/  # 单元测试
│   │   │   │   │   ├── FormRenderer.test.tsx
│   │   │   │   │   ├── hooks.test.ts
│   │   │   │   │   └── utils.test.ts
│   │   │   │   ├── hooks/
│   │   │   │   │   └── useFormRenderer.ts
│   │   │   │   ├── utils/
│   │   │   │   │   └── fieldUtils.ts
│   │   │   │   ├── FormRenderer.tsx
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   ├── theme/          # 主题系统
│   │   │   │   ├── tokens/     # Design Tokens
│   │   │   │   │   ├── colors.ts
│   │   │   │   │   ├── typography.ts
│   │   │   │   │   ├── spacing.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── utils/
│   │   │   │   │   └── createTheme.ts
│   │   │   │   ├── interface.ts
│   │   │   │   └── index.ts
│   │   │   ├── test-utils/     # 测试工具
│   │   │   │   └── index.tsx
│   │   │   └── index.ts        # 主入口
│   │   ├── package.json
│   │   ├── rollup.config.js    # Rollup 打包配置
│   │   └── tsconfig.build.json
│   └── hooks/                   # Hooks 包（预留）
│       ├── src/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
├── .eslintrc.js                 # ESLint 配置
├── .gitignore                   # Git 忽略文件
├── .prettierrc                  # Prettier 配置
├── jest.config.js               # Jest 配置
├── jest.setup.js                # Jest 环境设置
├── package.json                 # 根 package.json
├── pnpm-workspace.yaml          # pnpm 工作区配置
├── example/                      # 本地示例（Vite）
├── tsconfig.base.json           # 基础 TS 配置
├── tsconfig.test.json           # 测试 TS 配置
└── README.md                    # 项目说明
```

## 🎯 核心功能

### 1. FormRenderer 表单渲染器

通过 JSON 配置快速生成表单，支持：
- 10 种字段类型：input, textarea, select, radio, checkbox, switch, datePicker, rangePicker, number, custom
- 表单验证
- 多列布局（1-4 列）
- 动态显示/隐藏字段
- 自定义渲染

### 2. 主题系统

完整的 Design Token 系统：
- 亮色/暗色主题
- 紧凑模式
- 自定义主题
- 与 Antd 主题系统集成

### 3. ConfigProvider

全局配置提供者：
- 主题配置
- 主题切换
- useTheme Hook

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
# 启动组件开发
pnpm dev

# 启动文档站点
pnpm docs:dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 仅构建组件包
pnpm build:components
```

### 测试

```bash
# 运行测试
pnpm test

# 监听模式
pnpm test:watch

# 生成覆盖率报告
pnpm test:coverage
```

### 代码检查

```bash
# ESLint
pnpm lint
pnpm lint:fix

# TypeScript 类型检查
pnpm typecheck

# Prettier
pnpm format
pnpm format:check
```

## 📦 发布流程

### 1. 版本号管理

```bash
pnpm version:patch
# 或 pnpm version:minor / pnpm version:major
```

### 2. 提交变更

```bash
git add .
git commit -m "chore(release): publish"
git push --follow-tags
```

### 3. 自动发布

推送 tag（例如 `v0.1.1`）后，GitHub Actions 会自动发布到 npm。

## 📝 文档

### 本地预览

```bash
pnpm docs:dev
```

访问 http://localhost:8000

### 构建文档

```bash
pnpm docs:build
```

文档会自动部署到 GitHub Pages。

## 🧪 测试

测试覆盖率要求：
- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

测试文件位置：
- `packages/components/src/**/__tests__/`

## 🛠 技术栈

- **React**: 18+
- **TypeScript**: 5+
- **Antd**: 5.x
- **构建工具**: Rollup
- **包管理**: pnpm
- **文档**: Dumi 2.x
- **测试**: Jest + React Testing Library
- **版本管理**: Lerna
- **CI/CD**: GitHub Actions

## 📋 可用脚本

| 脚本 | 说明 |
|------|------|
| `pnpm dev` | 启动组件开发 |
| `pnpm build` | 构建所有包 |
| `pnpm test` | 运行测试 |
| `pnpm test:coverage` | 生成覆盖率报告 |
| `pnpm lint` | 运行 ESLint |
| `pnpm lint:fix` | 修复 ESLint 错误 |
| `pnpm typecheck` | TypeScript 类型检查 |
| `pnpm format` | 格式化代码 |
| `pnpm format:check` | 检查格式 |
| `pnpm docs:dev` | 启动文档站点 |
| `pnpm docs:build` | 构建文档 |
| `pnpm dev:example` | 启动示例应用 |
| `pnpm version:patch` | 版本号 +1（patch） |
| `pnpm version:minor` | 版本号 +1（minor） |
| `pnpm version:major` | 版本号 +1（major） |
| `pnpm publish:from-git` | 从 tag 发布到 npm |

## 🔧 配置说明

### ESLint

配置文件：`.eslintrc.js`
- React
- TypeScript
- Prettier 集成

### Prettier

配置文件：`.prettierrc`
- 单引号
- 分号
- 2 空格缩进

### TypeScript

- `tsconfig.base.json`: 基础配置
- `tsconfig.test.json`: 测试配置
- `packages/components/tsconfig.build.json`: 构建配置

### Jest

配置文件：`jest.config.js`
- ts-jest 预设
- jsdom 环境
- 覆盖率阈值 80%

## 📄 License

MIT
