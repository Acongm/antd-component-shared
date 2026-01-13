import { useState, useCallback, useMemo } from 'react';
import type { FormInstance } from 'antd';
import type { FieldConfig } from '../types';

export interface UseFormRendererOptions {
  fields:  FieldConfig[];
  form?:  FormInstance;
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>
  ) => void;
}

export interface UseFormRendererReturn {
  visibleFields: FieldConfig[];
  isFieldVisible:  (field: FieldConfig) => boolean;
  getFieldValue: (name: string) => unknown;
  setFieldValue: (name: string, value: unknown) => void;
  resetFields: () => void;
  validateFields: () => Promise<Record<string, unknown>>;
}

export const useFormRenderer = (
  options: UseFormRendererOptions
): UseFormRendererReturn => {
  const { fields, form } = options;
  const [formValues, setFormValues] = useState<Record<string, unknown>>({});

  // 判断字段是否可见
  const isFieldVisible = useCallback(
    (field:  FieldConfig): boolean => {
      if (typeof field.hidden === 'function') {
        const values = form?.getFieldsValue() || formValues;
        return !field.hidden(values);
      }
      return ! field.hidden;
    },
    [form, formValues]
  );

  // 过滤可见字段
  const visibleFields = useMemo(() => {
    return fields.filter(isFieldVisible);
  }, [fields, isFieldVisible]);

  // 获取字段值
  const getFieldValue = useCallback(
    (name: string): unknown => {
      if (form) {
        return form.getFieldValue(name);
      }
      return formValues[name];
    },
    [form, formValues]
  );

  // 设置字段值
  const setFieldValue = useCallback(
    (name: string, value: unknown): void => {
      if (form) {
        form.setFieldValue(name, value);
      } else {
        setFormValues((prev) => ({ ...prev, [name]: value }));
      }
    },
    [form]
  );

  // 重置表单
  const resetFields = useCallback((): void => {
    if (form) {
      form.resetFields();
    } else {
      setFormValues({});
    }
  }, [form]);

  // 验证表单
  const validateFields = useCallback(async (): Promise<Record<string, unknown>> => {
    if (form) {
      return form.validateFields();
    }
    return formValues;
  }, [form, formValues]);

  return {
    visibleFields,
    isFieldVisible,
    getFieldValue,
    setFieldValue,
    resetFields,
    validateFields,
  };
};