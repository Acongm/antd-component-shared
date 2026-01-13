import {
  getFieldPlaceholder,
  getRequiredMessage,
  isOptionsField,
  calculateColSpan,
  normalizeOptions,
  deepMerge,
} from '../utils/fieldUtils';
import type { FieldConfig } from '../types';

describe('fieldUtils', () => {
  describe('getFieldPlaceholder', () => {
    it('should return custom placeholder when provided', () => {
      const field: FieldConfig = {
        name: 'test',
        label: 'Test',
        type: 'input',
        placeholder: '自定义占位符',
      };

      expect(getFieldPlaceholder(field)).toBe('自定义占位符');
    });

    it('should generate placeholder for input field', () => {
      const field: FieldConfig = {
        name: 'username',
        label:  '用户名',
        type: 'input',
      };

      expect(getFieldPlaceholder(field)).toBe('请输入用户名');
    });

    it('should generate placeholder for select field', () => {
      const field:  FieldConfig = {
        name: 'role',
        label:  '角色',
        type: 'select',
      };

      expect(getFieldPlaceholder(field)).toBe('请选择角色');
    });

    it('should return empty string for switch field', () => {
      const field:  FieldConfig = {
        name: 'active',
        label:  '启用',
        type: 'switch',
      };

      expect(getFieldPlaceholder(field)).toBe('');
    });
  });

  describe('getRequiredMessage', () => {
    it('should return input message for text fields', () => {
      const field: FieldConfig = {
        name: 'username',
        label: '用户名',
        type:  'input',
      };

      expect(getRequiredMessage(field)).toBe('请输入用户名');
    });

    it('should return select message for select fields', () => {
      const field: FieldConfig = {
        name:  'role',
        label: '角色',
        type: 'select',
      };

      expect(getRequiredMessage(field)).toBe('请选择角色');
    });

    it('should return select message for date picker fields', () => {
      const field:  FieldConfig = {
        name: 'date',
        label:  '日期',
        type: 'datePicker',
      };

      expect(getRequiredMessage(field)).toBe('请选择日期');
    });
  });

  describe('isOptionsField', () => {
    it('should return true for select type', () => {
      expect(isOptionsField('select')).toBe(true);
    });

    it('should return true for radio type', () => {
      expect(isOptionsField('radio')).toBe(true);
    });

    it('should return true for checkbox type', () => {
      expect(isOptionsField('checkbox')).toBe(true);
    });

    it('should return false for input type', () => {
      expect(isOptionsField('input')).toBe(false);
    });

    it('should return false for switch type', () => {
      expect(isOptionsField('switch')).toBe(false);
    });
  });

  describe('calculateColSpan', () => {
    it('should return field colSpan when provided', () => {
      const field: FieldConfig = {
        name: 'test',
        label:  'Test',
        type: 'input',
        colSpan: 8,
      };

      expect(calculateColSpan(field, 2)).toBe(8);
    });

    it('should calculate colSpan based on columns', () => {
      const field: FieldConfig = {
        name:  'test',
        label: 'Test',
        type: 'input',
      };

      expect(calculateColSpan(field, 1)).toBe(24);
      expect(calculateColSpan(field, 2)).toBe(12);
      expect(calculateColSpan(field, 3)).toBe(8);
      expect(calculateColSpan(field, 4)).toBe(6);
    });
  });

  describe('normalizeOptions', () => {
    it('should return empty array for undefined options', () => {
      expect(normalizeOptions(undefined)).toEqual([]);
    });

    it('should normalize options correctly', () => {
      const options = [
        { label:  'Option 1', value: 1 },
        { label: 'Option 2', value:  2, disabled: true },
      ];

      const result = normalizeOptions(options);

      expect(result).toEqual([
        { label: 'Option 1', value: 1, disabled: undefined },
        { label: 'Option 2', value: 2, disabled: true },
      ]);
    });

    it('should convert label to string', () => {
      const options = [
        { label: 123 as any, value: 'test' },
      ];

      const result = normalizeOptions(options);

      expect(result[0].label).toBe('123');
    });
  });

  describe('deepMerge', () => {
    it('should merge flat objects', () => {
      const target = { a: 1, b: 2 };
      const source = { b: 3, c: 4 };

      expect(deepMerge(target, source)).toEqual({ a:  1, b:  3, c:  4 });
    });

    it('should merge nested objects', () => {
      const target = { a: 1, nested: { x: 1, y: 2 } };
      const source = { nested: { y: 3, z: 4 } };

      expect(deepMerge(target, source)).toEqual({
        a: 1,
        nested: { x: 1, y: 3, z: 4 },
      });
    });

    it('should not mutate original objects', () => {
      const target = { a: 1 };
      const source = { b: 2 };

      deepMerge(target, source);

      expect(target).toEqual({ a: 1 });
      expect(source).toEqual({ b: 2 });
    });

    it('should handle arrays by replacing', () => {
      const target = { arr: [1, 2, 3] };
      const source = { arr: [4, 5] };

      expect(deepMerge(target, source)).toEqual({ arr: [4, 5] });
    });
  });
});