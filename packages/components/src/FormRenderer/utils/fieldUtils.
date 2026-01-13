import type { FieldConfig, FieldType } from '../types';

/**
 * 获取字段的占位符文本
 */
export const getFieldPlaceholder = (field:  FieldConfig): string => {
  if (field.placeholder) {
    return field.placeholder;
  }

  const actionMap: Record<FieldType, string> = {
    input: '请输入',
    textarea: '请输入',
    select: '请选择',
    radio: '请选择',
    checkbox: '请选择',
    switch:  '',
    datePicker: '请选择',
    rangePicker: '请选择',
    number: '请输入',
    custom: '',
  };

  const action = actionMap[field.type] || '请输入';
  return field.label ?  `${action}${field.label}` : action;
};

/**
 * 获取必填验证的错误消息
 */
export const getRequiredMessage = (field: FieldConfig): string => {
  const isSelectType = ['select', 'radio', 'checkbox', 'datePicker', 'rangePicker'].includes(
    field. type
  );
  const action = isSelectType ?  '请选择' : '请输入';
  return field.label ? `${action}${field.label}` : `${action}该字段`;
};

/**
 * 判断字段是否需要选项
 */
export const isOptionsField = (type: FieldType): boolean => {
  return ['select', 'radio', 'checkbox']. includes(type);
};

/**
 * 计算栅格列宽
 */
export const calculateColSpan = (
  field: FieldConfig,
  columns: number
): number => {
  if (field.colSpan) {
    return field.colSpan;
  }
  return Math.floor(24 / columns);
};

/**
 * 格式化字段选项
 */
export const normalizeOptions = (
  options: FieldConfig['options']
): Array<{ label: string; value: string | number }> => {
  if (!options) return [];
  
  return options. map((opt) => ({
    label: String(opt.label),
    value: opt.value,
    disabled: opt.disabled,
  }));
};

/**
 * 深度合并对象
 */
export const deepMerge = <T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T => {
  const result = { ...target };

  Object.keys(source).forEach((key) => {
    const sourceValue = source[key as keyof T];
    const targetValue = target[key as keyof T];

    if (
      typeof sourceValue === 'object' &&
      sourceValue !== null &&
      ! Array.isArray(sourceValue) &&
      typeof targetValue === 'object' &&
      targetValue !== null &&
      ! Array.isArray(targetValue)
    ) {
      result[key as keyof T] = deepMerge(
        targetValue as Record<string, unknown>,
        sourceValue as Record<string, unknown>
      ) as T[keyof T];
    } else if (sourceValue !== undefined) {
      result[key as keyof T] = sourceValue as T[keyof T];
    }
  });

  return result;
};