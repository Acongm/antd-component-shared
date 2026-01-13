import type { FormProps, FormItemProps } from 'antd';
import type { ReactNode } from 'react';

/** 字段类型 */
export type FieldType = 
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

/** 选项配置 */
export interface FieldOption {
  label: ReactNode;
  value: string | number;
  disabled?: boolean;
}

/** 字段配置 */
export interface FieldConfig {
  /** 字段名 */
  name: string;
  /** 标签 */
  label?:  ReactNode;
  /** 字段类型 */
  type: FieldType;
  /** 占位符 */
  placeholder?: string;
  /** 是否必填 */
  required?: boolean;
  /** 选项列表（select/radio/checkbox） */
  options?: FieldOption[];
  /** 默认值 */
  defaultValue?: unknown;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否隐藏 */
  hidden?: boolean | ((values: Record<string, unknown>) => boolean);
  /** FormItem 属性 */
  formItemProps?: Omit<FormItemProps, 'name' | 'label'>;
  /** 组件属性 */
  componentProps?: Record<string, unknown>;
  /** 自定义渲染 */
  render?: (field: FieldConfig, form: unknown) => ReactNode;
  /** 验证规则 */
  rules?: FormItemProps['rules'];
  /** 栅格列数 */
  colSpan?: number;
}

/** 表单渲染器属性 */
export interface FormRendererProps extends Omit<FormProps, 'children'> {
  /** 字段配置列表 */
  fields: FieldConfig[];
  /** 列数 */
  columns?: 1 | 2 | 3 | 4;
  /** 是否显示冒号 */
  colon?: boolean;
  /** 提交按钮文本 */
  submitText?: ReactNode;
  /** 重置按钮文本 */
  resetText?: ReactNode;
  /** 是否显示操作按钮 */
  showActions?: boolean;
  /** 加载状态 */
  loading?: boolean;
  /** 提交回调 */
  onSubmit?: (values: Record<string, unknown>) => void | Promise<void>;
  /** 值变化回调 */
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>
  ) => void;
}