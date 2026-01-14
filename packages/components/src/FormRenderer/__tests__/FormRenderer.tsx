import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { FormRenderer } from '../FormRenderer';
import type { FieldConfig } from '../types';

describe('FormRenderer', () => {
  // 基础渲染测试
  describe('Basic Rendering', () => {
    it('should render form with fields correctly', () => {
      const fields: FieldConfig[] = [
        { name: 'username', label: '用户名', type: 'input' },
        { name: 'password', label: '密码', type: 'input' },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByLabelText('用户名')).toBeInTheDocument();
      expect(screen.getByLabelText('密码')).toBeInTheDocument();
    });

    it('should render submit and reset buttons by default', () => {
      const fields: FieldConfig[] = [
        { name: 'test', label: 'Test', type: 'input' },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByRole('button', { name: '提交' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '重置' })).toBeInTheDocument();
    });

    it('should hide action buttons when showActions is false', () => {
      const fields: FieldConfig[] = [
        { name: 'test', label: 'Test', type: 'input' },
      ];

      render(<FormRenderer fields={fields} showActions={false} />);

      expect(screen.queryByRole('button', { name: '提交' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: '重置' })).not.toBeInTheDocument();
    });

    it('should render custom button text', () => {
      const fields: FieldConfig[] = [
        { name: 'test', label: 'Test', type: 'input' },
      ];

      render(
        <FormRenderer
          fields={fields}
          submitText="确认"
          resetText="清空"
        />
      );

      expect(screen.getByRole('button', { name: '确认' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '清空' })).toBeInTheDocument();
    });
  });

  // 字段类型测试
  describe('Field Types', () => {
    it('should render input field', () => {
      const fields: FieldConfig[] = [
        {
          name: 'username',
          label: '用户名',
          type: 'input',
          placeholder: '请输入用户名',
        },
      ];

      render(<FormRenderer fields={fields} />);

      const input = screen.getByPlaceholderText('请输入用户名');
      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
    });

    it('should render textarea field', () => {
      const fields: FieldConfig[] = [
        {
          name: 'description',
          label: '描述',
          type: 'textarea',
          componentProps: { rows: 4 },
        },
      ];

      render(<FormRenderer fields={fields} />);

      const textarea = screen.getByLabelText('描述');
      expect(textarea.tagName).toBe('TEXTAREA');
    });

    it('should render select field with options', async () => {
      const fields: FieldConfig[] = [
        {
          name: 'role',
          label: '角色',
          type: 'select',
          options: [
            { label: '管理员', value: 'admin' },
            { label: '用户', value: 'user' },
          ],
        },
      ];

      render(<FormRenderer fields={fields} />);

      const select = screen.getByLabelText('角色');
      expect(select).toBeInTheDocument();

      // 点击打开下拉框
      await userEvent.click(select);

      // 验证选项
      await waitFor(() => {
        expect(screen.getByText('管理员')).toBeInTheDocument();
        expect(screen.getByText('用户')).toBeInTheDocument();
      });
    });

    it('should render radio group field', () => {
      const fields: FieldConfig[] = [
        {
          name: 'gender',
          label: '性别',
          type: 'radio',
          options: [
            { label: '男', value: 'male' },
            { label: '女', value: 'female' },
          ],
        },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByLabelText('男')).toBeInTheDocument();
      expect(screen.getByLabelText('女')).toBeInTheDocument();
    });

    it('should render checkbox group field', () => {
      const fields: FieldConfig[] = [
        {
          name: 'skills',
          label: '技能',
          type: 'checkbox',
          options: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
          ],
        },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByLabelText('React')).toBeInTheDocument();
      expect(screen.getByLabelText('Vue')).toBeInTheDocument();
    });

    it('should render switch field', () => {
      const fields: FieldConfig[] = [
        { name: 'active', label: '启用', type: 'switch' },
      ];

      render(<FormRenderer fields={fields} />);

      const switchBtn = screen.getByRole('switch');
      expect(switchBtn).toBeInTheDocument();
    });

    it('should render number field', async () => {
      const fields: FieldConfig[] = [
        {
          name: 'age',
          label: '年龄',
          type: 'number',
          componentProps: { min: 0, max: 100 },
        },
      ];

      render(<FormRenderer fields={fields} />);

      const input = screen.getByLabelText('年龄');
      expect(input).toBeInTheDocument();
    });

    it('should render date picker field', () => {
      const fields: FieldConfig[] = [
        { name: 'birthday', label: '生日', type: 'datePicker' },
      ];

      render(<FormRenderer fields={fields} />);

      const datePicker = screen.getByLabelText('生日');
      expect(datePicker).toBeInTheDocument();
    });

    it('should render custom field with render function', () => {
      const fields: FieldConfig[] = [
        {
          name: 'custom',
          label: '自定义',
          type: 'custom',
          render: () => <div data-testid="custom-field">Custom Content</div>,
        },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByTestId('custom-field')).toBeInTheDocument();
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });
  });

  // 表单交互测试
  describe('Form Interactions', () => {
    it('should call onSubmit with form values', async () => {
      const handleSubmit = jest.fn();
      const fields: FieldConfig[] = [
        { name: 'username', label: '用户名', type: 'input' },
        { name: 'email', label: '邮箱', type: 'input' },
      ];

      render(<FormRenderer fields={fields} onSubmit={handleSubmit} />);

      // 填写表单
      await userEvent.type(screen.getByLabelText('用户名'), 'testuser');
      await userEvent.type(screen.getByLabelText('邮箱'), 'test@example.com');

      // 提交表单
      await userEvent.click(screen.getByRole('button', { name: '提交' }));

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledWith({
          username: 'testuser',
          email: 'test@example.com',
        });
      });
    });

    it('should reset form when reset button is clicked', async () => {
      const fields: FieldConfig[] = [
        { name: 'username', label: '用户名', type: 'input' },
      ];

      render(<FormRenderer fields={fields} />);

      const input = screen.getByLabelText('用户名') as HTMLInputElement;

      // 输入内容
      await userEvent.type(input, 'testuser');
      expect(input.value).toBe('testuser');

      // 点击重置
      await userEvent.click(screen.getByRole('button', { name: '重置' }));

      await waitFor(() => {
        expect(input.value).toBe('');
      });
    });

    it('should call onValuesChange when values change', async () => {
      const handleValuesChange = jest.fn();
      const fields: FieldConfig[] = [
        { name: 'username', label: '用户名', type: 'input' },
      ];

      render(
        <FormRenderer
          fields={fields}
          onValuesChange={handleValuesChange}
        />
      );

      await userEvent.type(screen.getByLabelText('用户名'), 'a');

      await waitFor(() => {
        expect(handleValuesChange).toHaveBeenCalled();
      });
    });

    it('should show loading state on submit button', () => {
      const fields: FieldConfig[] = [
        { name: 'test', label: 'Test', type: 'input' },
      ];

      render(<FormRenderer fields={fields} loading={true} />);

      const submitBtn = screen.getByRole('button', { name: '提交' });
      expect(submitBtn).toBeDisabled();
    });
  });

  // 表单验证测试
  describe('Form Validation', () => {
    it('should show error message for required field', async () => {
      const fields: FieldConfig[] = [
        {
          name: 'username',
          label: '用户名',
          type: 'input',
          required: true,
        },
      ];

      render(<FormRenderer fields={fields} />);

      // 直接提交空表单
      await userEvent.click(screen.getByRole('button', { name: '提交' }));

      await waitFor(() => {
      expect(screen.getByText('请输入用户名')).toBeInTheDocument();
      });
    });

    it('should validate with custom rules', async () => {
      const fields: FieldConfig[] = [
        {
          name: 'email',
          label: '邮箱',
          type: 'input',
          rules: [
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '请输入有效的邮箱地址' },
          ],
        },
      ];

      render(<FormRenderer fields={fields} />);

      // 输入无效邮箱
      await userEvent.type(screen.getByLabelText('邮箱'), 'invalid-email');
      await userEvent.click(screen.getByRole('button', { name: '提交' }));

      await waitFor(() => {
        expect(screen.getByText('请输入有效的邮箱地址')).toBeInTheDocument();
      });
    });

    it('should not submit form with validation errors', async () => {
      const handleSubmit = jest.fn();
      const fields: FieldConfig[] = [
        {
          name: 'username',
          label: '用户名',
          type: 'input',
          required: true,
        },
      ];

      render(<FormRenderer fields={fields} onSubmit={handleSubmit} />);

      await userEvent.click(screen.getByRole('button', { name: '提交' }));

      await waitFor(() => {
        expect(handleSubmit).not.toHaveBeenCalled();
      });
    });
  });

  // 字段状态测试
  describe('Field States', () => {
    it('should disable field when disabled is true', () => {
      const fields: FieldConfig[] = [
        {
          name: 'username',
          label: '用户名',
          type: 'input',
          disabled: true,
        },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByLabelText('用户名')).toBeDisabled();
    });

    it('should hide field when hidden is true', () => {
      const fields: FieldConfig[] = [
        { name: 'visible', label: '可见', type: 'input' },
        { name: 'hidden', label: '隐藏', type: 'input', hidden: true },
      ];

      render(<FormRenderer fields={fields} />);

      expect(screen.getByLabelText('可见')).toBeInTheDocument();
      expect(screen.queryByLabelText('隐藏')).not.toBeInTheDocument();
    });

    it('should set default value', async () => {
      const fields: FieldConfig[] = [
        {
          name: 'username',
          label: '用户名',
          type: 'input',
          defaultValue: 'default-user',
        },
      ];

      render(
        <FormRenderer
          fields={fields}
          initialValues={{ username: 'default-user' }}
        />
      );

      await waitFor(() => {
        expect(screen.getByLabelText('用户名')).toHaveValue('default-user');
      });
    });
  });

  // 布局测试
  describe('Layout', () => {
    it('should render with multiple columns', () => {
      const fields: FieldConfig[] = [
        { name: 'field1', label: 'Field 1', type: 'input' },
        { name: 'field2', label: 'Field 2', type: 'input' },
        { name: 'field3', label: 'Field 3', type: 'input' },
        { name: 'field4', label: 'Field 4', type: 'input' },
      ];

      const { container } = render(
        <FormRenderer fields={fields} columns={2} />
      );

      // 验证 Row 和 Col 结构
      const cols = container.querySelectorAll('.ant-col');
      expect(cols.length).toBeGreaterThan(0);
    });

    it('should respect custom colSpan', () => {
      const fields: FieldConfig[] = [
        { name: 'field1', label: 'Field 1', type: 'input', colSpan: 24 },
        { name: 'field2', label: 'Field 2', type: 'input', colSpan: 12 },
      ];

      const { container } = render(
        <FormRenderer fields={fields} columns={2} />
      );

      const cols = container.querySelectorAll('.ant-col');
      expect(cols[0]).toHaveClass('ant-col-24');
      expect(cols[1]).toHaveClass('ant-col-12');
    });
  });

  // 快照测试
  describe('Snapshots', () => {
    it('should match snapshot with basic fields', () => {
      const fields: FieldConfig[] = [
        { name: 'username', label: '用户名', type: 'input' },
        { name: 'password', label: '密码', type: 'input' },
      ];

      const { container } = render(<FormRenderer fields={fields} />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should match snapshot with all field types', () => {
      const fields: FieldConfig[] = [
        { name: 'input', label: 'Input', type: 'input' },
        { name: 'textarea', label: 'Textarea', type: 'textarea' },
        {
          name: 'select',
          label: 'Select',
          type: 'select',
          options: [{ label: 'Option', value: 'opt' }],
        },
        {
          name: 'radio',
          label: 'Radio',
          type: 'radio',
          options: [{ label: 'Radio', value: 'radio' }],
        },
        { name: 'switch', label: 'Switch', type: 'switch' },
        { name: 'number', label: 'Number', type: 'number' },
      ];

      const { container } = render(<FormRenderer fields={fields} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});