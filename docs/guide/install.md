# 安装

## 使用包管理器安装

推荐使用 pnpm 安装：

```bash
pnpm add @acongmr/antd-components
```

## Peer Dependencies

本组件库依赖以下包，请确保你的项目中已安装：

```json
{
  "peerDependencies":  {
    "antd": ">=5.0.0",
    "react":  ">=17.0.0",
    "react-dom": ">=17.0.0"
  }
}
```

## 按需引入

组件库支持 Tree Shaking，你可以直接按需引入：

```tsx
// ✅ 推荐：按需引入
import { FormRenderer } from '@acongmr/antd-components';

// ❌ 不推荐：全量引入
import * as MyLib from '@acongmr/antd-components';
```

## 样式引入

### 方式一：全量引入样式

```tsx
import '@acongmr/antd-components/dist/styles.css';
```

### 方式二：配合 Antd 使用

如果你的项目已经引入了 Antd 样式，组件库会自动复用 Antd 的样式变量。

## TypeScript 支持

组件库使用 TypeScript 编写，提供完整的类型定义，无需额外安装 `@types` 包。

```tsx
import type { FieldConfig, FormRendererProps } from '@acongmr/antd-components';

const fields: FieldConfig[] = [
  // 完整的类型提示
];
```