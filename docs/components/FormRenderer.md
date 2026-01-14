# FormRenderer 表单渲染器

通过 JSON Schema 配置快速生成表单。

## 基础用法

```tsx
import { FormRenderer } from '@acongmr/antd-components';

export default () => {
  const fields = [
    {
      name:  'username',
      label: '用户名',
      type: 'input',
      required:  true,
      placeholder: '请输入用户名',
    },
    {
      name:  'password',
      label:  '密码',
      type: 'input',
      required:  true,
      componentProps: {
        type: 'password',
      },
    },
  ];

  return (
    <FormRenderer
      fields={fields}
      layout="vertical"
      onSubmit={(values) => {
        console.log('表单值:', values);
      }}
    />
  );
};
```

## 多列布局

通过 `columns` 属性设置表单的列数。

```tsx
import { FormRenderer } from '@acongmr/antd-components';

export default () => {
  const fields = [
    { name: 'firstName', label: '名', type: 'input' },
    { name: 'lastName', label: '姓', type: 'input' },
    { name: 'email', label:  '邮箱', type: 'input' },
    { name: 'phone', label: '电话', type: 'input' },
  ];

  return (
    <FormRenderer
      fields={fields}
      columns={2}
      layout="vertical"
      onSubmit={console.log}
    />
  );
};
```

## 各种字段类型

```tsx
import { FormRenderer } from '@acongmr/antd-components';

export default () => {
  const fields = [
    {
      name: 'name',
      label:  '姓名',
      type: 'input',
      required: true,
    },
    {
      name: 'gender',
      label:  '性别',
      type: 'radio',
      options:  [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
      ],
    },
    {
      name: 'role',
      label:  '角色',
      type: 'select',
      options: [
        { label: '管理员', value: 'admin' },
        { label: '用户', value:  'user' },
        { label:  '访客', value: 'guest' },
      ],
    },
    {
      name: 'skills',
      label:  '技能',
      type: 'checkbox',
      options: [
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
      ],
    },
    {
      name:  'birthday',
      label: '生日',
      type: 'datePicker',
    },
    {
      name: 'active',
      label: '是否启用',
      type: 'switch',
    },
    {
      name: 'age',
      label:  '年龄',
      type: 'number',
      componentProps: {
        min: 0,
        max: 120,
      },
    },
    {
      name:  'bio',
      label:  '个人简介',
      type: 'textarea',
      componentProps: {
        rows: 4,
        maxLength: 200,
        showCount: true,
      },
    },
  ];

  return (
    <FormRenderer
      fields={fields}
      columns={2}
      layout="vertical"
      onSubmit={console.log}
    />
  );
};
```

## 自定义字段

使用 `render` 方法自定义字段渲染。

```tsx
import { FormRenderer } from '@acongmr/antd-components';
import { Slider } from 'antd';

export default () => {
  const fields = [
    {
      name: 'name',
      label:  '姓名',
      type: 'input',
      required: true,
    },
    {
      name: 'satisfaction',
      label:  '满意度',
      type: 'custom',
      render:  () => <Slider min={0} max={100} />,
    },
  ];

  return (
    <FormRenderer
      fields={fields}
      layout="vertical"
      onSubmit={console.log}
    />
  );
};
```

## API

### FormRenderer Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fields | 字段配置列表 | `FieldConfig[]` | `[]` |
| columns | 表单列数 | `1 \| 2 \| 3 \| 4` | `1` |
| colon | 是否显示冒号 | `boolean` | `true` |
| submitText | 提交按钮文本 | `ReactNode` | `'提交'` |
| resetText | 重置按钮文本 | `ReactNode` | `'重置'` |
| showActions | 是否显示操作按钮 | `boolean` | `true` |
| loading | 加载状态 | `boolean` | `false` |
| onSubmit | 提交回调 | `(values: Record<string, unknown>) => void` | - |
| onValuesChange | 值变化回调 | `(changedValues, allValues) => void` | - |

### FieldConfig

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签 | `ReactNode` | - |
| type | 字段类型 | `FieldType` | - |
| required | 是否必填 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| hidden | 是否隐藏 | `boolean \| ((values) => boolean)` | `false` |
| placeholder | 占位符 | `string` | - |
| options | 选项列表 | `FieldOption[]` | - |
| defaultValue | 默认值 | `unknown` | - |
| rules | 验证规则 | `Rule[]` | - |
| colSpan | 栅格列数 | `number` | - |
| formItemProps | FormItem 属性 | `FormItemProps` | - |
| componentProps | 组件属性 | `Record<string, unknown>` | - |
| render | 自定义渲染 | `(field, form) => ReactNode` | - |

### FieldType

```ts
type FieldType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'datePicker'
  | 'rangePicker'
  | 'number'
  | 'custom';
```