import type { DesignToken, MotionToken, ShadowToken } from '../interface';
import { lightColors, darkColors } from './colors';
import { typography } from './typography';
import { spacing, compactSpacing } from './spacing';

const motion: MotionToken = {
  motionDurationFast: '0.1s',
  motionDurationMid:  '0.2s',
  motionDurationSlow:  '0.3s',
  motionEaseInOut:  'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
};

const shadow: ShadowToken = {
  boxShadow:  `
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)
  `,
  boxShadowSecondary: `
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)
  `,
  boxShadowTertiary: `
    0 1px 2px 0 rgba(0, 0, 0, 0.03),
    0 1px 6px -1px rgba(0, 0, 0, 0.02),
    0 2px 4px 0 rgba(0, 0, 0, 0.02)
  `,
};

const baseToken = {
  ...typography,
  ...spacing,
  ...motion,
  ...shadow,

  // 线宽
  lineWidth: 1,
  lineWidthBold: 2,

  // 控件高度
  controlHeight: 32,
  controlHeightSM: 24,
  controlHeightLG: 40,
  controlHeightXS: 16,

  // z-index
  zIndexBase: 0,
  zIndexPopupBase: 1000,
};

/**
 * 默认亮色主题 Token
 */
export const defaultToken: DesignToken = {
  ...baseToken,
  ...lightColors,
};

/**
 * 暗色主题 Token
 */
export const darkToken: DesignToken = {
  ...baseToken,
  ...darkColors,
};

/**
 * 紧凑主题 Token
 */
export const compactToken: DesignToken = {
  ...defaultToken,
  ...compactSpacing,
  controlHeight: 28,
  controlHeightSM: 20,
  controlHeightLG: 36,
  controlHeightXS: 14,
};

export { lightColors, darkColors, typography, spacing, compactSpacing };