import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

// 自定义渲染器,包含全局 Provider
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: typeof zhCN;
}

const AllTheProviders: React.FC<{
  children: React.ReactNode;
  locale?: typeof zhCN;
}> = ({ children, locale = zhCN }) => {
  return (
    <ConfigProvider locale={locale}>
      {children}
    </ConfigProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: CustomRenderOptions
): RenderResult => {
  const { locale, ...renderOptions } = options || {};
  
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders locale={locale}>{children}</AllTheProviders>
    ),
    ...renderOptions,
  });
};

// 重新导出 testing-library 的所有方法
export * from '@testing-library/react';
export { customRender as render };

// 测试辅助函数
export const waitForComponentToPaint = async (wrapper: any) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
};

// Mock 表单数据
export const mockFormFields = [
  {
    name: 'username',
    label: '用户名',
    type: 'input' as const,
    required: true,
  },
  {
    name: 'email',
    label: '邮箱',
    type: 'input' as const,
    required: true,
  },
  {
    name: 'role',
    label: '角色',
    type: 'select' as const,
    options: [
      { label: '管理员', value: 'admin' },
      { label: '用户', value: 'user' },
    ],
  },
];