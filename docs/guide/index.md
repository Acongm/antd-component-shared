# 快速开始

## 介绍

My Component Lib 是一个基于 Antd 的企业级 React 组件库，提供了一系列高质量的组件，帮助你快速构建企业级应用。

## 特性

- 🚀 基于 Antd 5.x，与 Antd 生态无缝集成
- 📦 开箱即用，无需复杂配置
- 💎 使用 TypeScript 开发，提供完整类型定义
- 🎨 支持主题定制
- 📝 强大的表单渲染器

## 环境要求

- React >= 17.0.0
- Antd >= 5.0.0
- Node.js >= 18.0.0

## 安装

```bash
# npm
npm install @acongmr/antd-components antd

# yarn
yarn add @acongmr/antd-components antd

# pnpm
pnpm add @acongmr/antd-components antd
```

## 基础使用

```tsx
import { FormRenderer } from '@acongmr/antd-components';

const fields = [
  {
    name: 'username',
    label: '用户名',
    type:  'input',
    required: true,
  },
];

function App() {
  return <FormRenderer fields={fields} onSubmit={console.log} />;
}
```