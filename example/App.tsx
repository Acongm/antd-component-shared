import React from 'react';
import { FormRenderer, FieldConfig } from '@my-lib/components';

const fields: FieldConfig[] = [
  {
    name: 'username',
    label: '用户名',
    type: 'input',
    required: true,
    placeholder: '请输入用户名',
  },
  {
    name: 'email',
    label: '邮箱',
    type: 'input',
    required: true,
    componentProps: {
      type: 'email',
    },
  },
  {
    name: 'role',
    label:  '角色',
    type: 'select',
    required: true,
    options: [
      { label: '管理员', value:  'admin' },
      { label:  '用户', value: 'user' },
      { label: '访客', value: 'guest' },
    ],
  },
  {
    name: 'gender',
    label:  '性别',
    type: 'radio',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
    ],
  },
  {
    name:  'birthday',
    label:  '生日',
    type: 'datePicker',
    colSpan: 12,
  },
  {
    name:  'active',
    label:  '启用',
    type: 'switch',
    colSpan: 12,
  },
  {
    name: 'remark',
    label: '备注',
    type: 'textarea',
    componentProps: {
      rows: 4,
    },
  },
];

function App() {
  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('Form values:', values);
  };

  return (
    <FormRenderer
      fields={fields}
      columns={2}
      layout="vertical"
      onSubmit={handleSubmit}
    />
  );
}

export default App;