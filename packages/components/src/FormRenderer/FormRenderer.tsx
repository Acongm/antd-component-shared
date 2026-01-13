import React, { useMemo, useCallback } from 'react';
import {
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Switch,
  DatePicker,
  InputNumber,
  Button,
  Row,
  Col,
  Space,
} from 'antd';
import type { FormRendererProps, FieldConfig, FieldType } from './types';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

/** 字段组件映射 */
const FIELD_COMPONENT_MAP: Record<FieldType, React.FC<any>> = {
  input: Input,
  textarea: TextArea,
  select: Select,
  radio: Radio.Group,
  checkbox: Checkbox.Group,
  switch: Switch,
  datePicker: DatePicker,
  rangePicker: RangePicker,
  number: InputNumber,
  custom: () => null,
};

export const FormRenderer: React.FC<FormRendererProps> = ({
  fields,
  columns = 1,
  colon = true,
  submitText = '提交',
  resetText = '重置',
  showActions = true,
  loading = false,
  onSubmit,
  onValuesChange,
  ...formProps
}) => {
  const [form] = Form.useForm();

  // 计算栅格 span
  const getColSpan = useCallback(
    (field: FieldConfig) => {
      if (field.colSpan) return field.colSpan;
      return 24 / columns;
    },
    [columns]
  );

  // 渲染单个字段
  const renderField = useCallback(
    (field: FieldConfig) => {
      const {
        name,
        label,
        type,
        placeholder,
        required,
        options,
        disabled,
        formItemProps,
        componentProps,
        render,
        rules,
      } = field;

      // 自定义渲染
      if (type === 'custom' && render) {
        return (
          <Form.Item
            key={name}
            name={name}
            label={label}
            rules={rules}
            {...formItemProps}
          >
            {render(field, form)}
          </Form.Item>
        );
      }

      const Component = FIELD_COMPONENT_MAP[type];
      if (!Component) return null;

      // 构建组件属性
      const fieldComponentProps:  Record<string, unknown> = {
        placeholder,
        disabled,
        ...componentProps,
      };

      // 带选项的组件
      if (['select', 'radio', 'checkbox'].includes(type) && options) {
        fieldComponentProps.options = options;
      }

      // Switch 使用 valuePropName
      const valuePropName = type === 'switch' ? 'checked' : undefined;

      // 默认规则
      const defaultRules = required
        ? [{ required: true, message: `请${type === 'select' ? '选择' : '输入'}${label}` }]
        : [];

      return (
        <Form.Item
          key={name}
          name={name}
          label={label}
          valuePropName={valuePropName}
          rules={rules || defaultRules}
          {...formItemProps}
        >
          <Component {...fieldComponentProps} />
        </Form.Item>
      );
    },
    [form]
  );

  // 过滤隐藏字段
  const visibleFields = useMemo(() => {
    return fields.filter((field) => {
      if (typeof field.hidden === 'function') {
        return !field.hidden(form.getFieldsValue());
      }
      return !field.hidden;
    });
  }, [fields, form]);

  // 处理提交
  const handleFinish = async (values: Record<string, unknown>) => {
    await onSubmit?.(values);
  };

  // 处理重置
  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      colon={colon}
      onFinish={handleFinish}
      onValuesChange={onValuesChange}
      {...formProps}
    >
      <Row gutter={16}>
        {visibleFields.map((field) => (
          <Col key={field.name} span={getColSpan(field)}>
            {renderField(field)}
          </Col>
        ))}
      </Row>

      {showActions && (
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              {submitText}
            </Button>
            <Button onClick={handleReset}>{resetText}</Button>
          </Space>
        </Form.Item>
      )}
    </Form>
  );
};

FormRenderer.displayName = 'FormRenderer';