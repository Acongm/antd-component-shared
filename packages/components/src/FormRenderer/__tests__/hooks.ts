import { renderHook, act } from '@testing-library/react';
import { useFormRenderer } from '../hooks/useFormRenderer';
import type { FieldConfig } from '../types';

describe('useFormRenderer', () => {
  const basicFields: FieldConfig[] = [
    { name: 'username', label: '用户名', type: 'input' },
    { name: 'email', label: '邮箱', type:  'input' },
  ];

  describe('visibleFields', () => {
    it('should return all fields when none are hidden', () => {
      const { result } = renderHook(() =>
        useFormRenderer({ fields: basicFields })
      );

      expect(result.current.visibleFields).toHaveLength(2);
    });

    it('should filter out hidden fields', () => {
      const fieldsWithHidden:  FieldConfig[] = [
        { name: 'visible', label: '可见', type: 'input' },
        { name: 'hidden', label: '隐藏', type: 'input', hidden: true },
      ];

      const { result } = renderHook(() =>
        useFormRenderer({ fields: fieldsWithHidden })
      );

      expect(result.current.visibleFields).toHaveLength(1);
      expect(result.current.visibleFields[0].name).toBe('visible');
    });

    it('should handle dynamic hidden function', () => {
      const dynamicFields: FieldConfig[] = [
        { name: 'showEmail', label: '显示邮箱', type: 'switch' },
        {
          name: 'email',
          label: '邮箱',
          type: 'input',
          hidden:  (values) => !values.showEmail,
        },
      ];

      const { result } = renderHook(() =>
        useFormRenderer({ fields: dynamicFields })
      );

      // 初始状态下 email 应该隐藏
      expect(result.current.visibleFields).toHaveLength(1);
    });
  });

  describe('isFieldVisible', () => {
    it('should return true for visible fields', () => {
      const { result } = renderHook(() =>
        useFormRenderer({ fields:  basicFields })
      );

      expect(result.current.isFieldVisible(basicFields[0])).toBe(true);
    });

    it('should return false for hidden fields', () => {
      const hiddenField: FieldConfig = {
        name:  'hidden',
        label: '隐藏',
        type: 'input',
        hidden: true,
      };

      const { result } = renderHook(() =>
        useFormRenderer({ fields: [hiddenField] })
      );

      expect(result.current.isFieldVisible(hiddenField)).toBe(false);
    });
  });

  describe('field operations', () => {
    it('should set and get field value', () => {
      const { result } = renderHook(() =>
        useFormRenderer({ fields: basicFields })
      );

      act(() => {
        result.current.setFieldValue('username', 'testuser');
      });

      expect(result.current.getFieldValue('username')).toBe('testuser');
    });

    it('should reset all fields', () => {
      const { result } = renderHook(() =>
        useFormRenderer({ fields:  basicFields })
      );

      act(() => {
        result.current.setFieldValue('username', 'testuser');
        result.current.setFieldValue('email', 'test@example.com');
      });

      act(() => {
        result.current.resetFields();
      });

      expect(result.current.getFieldValue('username')).toBeUndefined();
      expect(result.current.getFieldValue('email')).toBeUndefined();
    });
  });

  describe('validateFields', () => {
    it('should return form values on validation', async () => {
      const { result } = renderHook(() =>
        useFormRenderer({ fields: basicFields })
      );

      act(() => {
        result.current.setFieldValue('username', 'testuser');
      });

      const values = await result.current.validateFields();
      expect(values).toEqual({ username:  'testuser' });
    });
  });
});