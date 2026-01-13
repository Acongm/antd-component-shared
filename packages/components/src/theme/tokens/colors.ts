import type { ColorToken } from '../interface';

/**
 * 亮色主题颜色
 */
export const lightColors: ColorToken = {
  // 品牌色 - 基于 Antd 默认蓝色
  colorPrimary:  '#1677ff',
  colorPrimaryHover:  '#4096ff',
  colorPrimaryActive: '#0958d9',
  colorPrimaryBg: '#e6f4ff',
  colorPrimaryBgHover: '#bae0ff',
  colorPrimaryBorder:  '#91caff',
  colorPrimaryBorderHover: '#69b1ff',
  colorPrimaryText: '#1677ff',
  colorPrimaryTextHover: '#4096ff',
  colorPrimaryTextActive:  '#0958d9',

  // 成功色
  colorSuccess: '#52c41a',
  colorSuccessBg: '#f6ffed',
  colorSuccessBorder:  '#b7eb8f',
  colorSuccessText:  '#52c41a',

  // 警告色
  colorWarning: '#faad14',
  colorWarningBg: '#fffbe6',
  colorWarningBorder: '#ffe58f',
  colorWarningText: '#faad14',

  // 错误色
  colorError:  '#ff4d4f',
  colorErrorBg: '#fff2f0',
  colorErrorBorder: '#ffccc7',
  colorErrorText: '#ff4d4f',

  // 信息色
  colorInfo: '#1677ff',
  colorInfoBg: '#e6f4ff',
  colorInfoBorder: '#91caff',
  colorInfoText: '#1677ff',

  // 中性色
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  colorTextQuaternary:  'rgba(0, 0, 0, 0.25)',
  colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',

  // 背景色
  colorBgContainer:  '#ffffff',
  colorBgLayout: '#f5f5f5',
  colorBgSpotlight:  'rgba(0, 0, 0, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',

  // 边框色
  colorBorder: '#d9d9d9',
  colorBorderSecondary: '#f0f0f0',

  // 填充色
  colorFill: 'rgba(0, 0, 0, 0.15)',
  colorFillSecondary:  'rgba(0, 0, 0, 0.06)',
  colorFillTertiary:  'rgba(0, 0, 0, 0.04)',
  colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
};

/**
 * 暗色主题颜色
 */
export const darkColors:  ColorToken = {
  // 品牌色
  colorPrimary: '#1668dc',
  colorPrimaryHover: '#3c89e8',
  colorPrimaryActive: '#1554ad',
  colorPrimaryBg: '#111a2c',
  colorPrimaryBgHover: '#112545',
  colorPrimaryBorder: '#15325b',
  colorPrimaryBorderHover: '#15417e',
  colorPrimaryText: '#1668dc',
  colorPrimaryTextHover: '#3c89e8',
  colorPrimaryTextActive: '#1554ad',

  // 成功色
  colorSuccess: '#49aa19',
  colorSuccessBg: '#162312',
  colorSuccessBorder: '#274916',
  colorSuccessText: '#49aa19',

  // 警告色
  colorWarning: '#d89614',
  colorWarningBg: '#2b2111',
  colorWarningBorder: '#594214',
  colorWarningText: '#d89614',

  // 错误色
  colorError:  '#dc4446',
  colorErrorBg: '#2c1618',
  colorErrorBorder: '#5b2526',
  colorErrorText: '#dc4446',

  // 信息色
  colorInfo: '#1668dc',
  colorInfoBg: '#111a2c',
  colorInfoBorder: '#15325b',
  colorInfoText: '#1668dc',

  // 中性色
  colorText: 'rgba(255, 255, 255, 0.85)',
  colorTextSecondary: 'rgba(255, 255, 255, 0.65)',
  colorTextTertiary: 'rgba(255, 255, 255, 0.45)',
  colorTextQuaternary:  'rgba(255, 255, 255, 0.25)',
  colorTextPlaceholder:  'rgba(255, 255, 255, 0.25)',
  colorTextDisabled: 'rgba(255, 255, 255, 0.25)',

  // 背景色
  colorBgContainer:  '#141414',
  colorBgLayout: '#000000',
  colorBgSpotlight: 'rgba(255, 255, 255, 0.85)',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',

  // 边框色
  colorBorder:  '#424242',
  colorBorderSecondary: '#303030',

  // 填充色
  colorFill:  'rgba(255, 255, 255, 0.18)',
  colorFillSecondary:  'rgba(255, 255, 255, 0.12)',
  colorFillTertiary: 'rgba(255, 255, 255, 0.08)',
  colorFillQuaternary: 'rgba(255, 255, 255, 0.04)',
};