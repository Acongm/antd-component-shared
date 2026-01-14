# Antd Component Shared

基于 Antd + React + TypeScript 的企业级组件库

## 特性

- 🚀 基于 Antd 5.x，与 Antd 生态无缝集成
- 📦 开箱即用，无需复杂配置
- 💎 使用 TypeScript 开发，提供完整类型定义
- 🎨 支持主题定制
- 📝 强大的表单渲染器

## 安装

```bash
pnpm add @acongm/antd-components-shared antd
```

## 快速开始

```tsx
import { FormRenderer } from '@acongm/antd-components-shared';

const fields = [
  {
    name: 'username',
    label: '用户名',
    type: 'input',
    required: true,
  },
];

function App() {
  return <FormRenderer fields={fields} onSubmit={console.log} />;
}
```

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发
pnpm dev

# 启动文档
pnpm docs:dev

# 运行测试
pnpm test

# 构建
pnpm build
```

## License

MIT