import type { SpacingToken } from '../interface';

export const spacing:  SpacingToken = {
  // 尺寸
  sizeXXS: 4,
  sizeXS: 8,
  sizeSM: 12,
  size:  16,
  sizeMD: 20,
  sizeLG: 24,
  sizeXL: 32,
  sizeXXL: 48,

  // 内边距
  padding:  16,
  paddingXS: 8,
  paddingSM: 12,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,

  // 外边距
  margin: 16,
  marginXS:  8,
  marginSM: 12,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,

  // 圆角
  borderRadius: 6,
  borderRadiusSM:  4,
  borderRadiusLG: 8,
  borderRadiusXS: 2,
};

/**
 * 紧凑模式间距
 */
export const compactSpacing:  Partial<SpacingToken> = {
  sizeXXS:  2,
  sizeXS: 4,
  sizeSM: 8,
  size: 12,
  sizeMD: 16,
  sizeLG: 20,
  sizeXL: 24,
  sizeXXL: 32,

  padding: 12,
  paddingXS: 4,
  paddingSM: 8,
  paddingMD: 16,
  paddingLG: 20,
  paddingXL: 24,

  margin: 12,
  marginXS: 4,
  marginSM: 8,
  marginMD:  16,
  marginLG: 20,
  marginXL: 24,
};