import type { ThemeConfig as AntdThemeConfig } from 'antd';

/**
 * 颜色 Token
 */
export interface ColorToken {
  // 品牌色
  colorPrimary: string;
  colorPrimaryHover: string;
  colorPrimaryActive: string;
  colorPrimaryBg: string;
  colorPrimaryBgHover: string;
  colorPrimaryBorder: string;
  colorPrimaryBorderHover: string;
  colorPrimaryText: string;
  colorPrimaryTextHover: string;
  colorPrimaryTextActive: string;

  // 成功色
  colorSuccess: string;
  colorSuccessBg: string;
  colorSuccessBorder: string;
  colorSuccessText: string;

  // 警告色
  colorWarning: string;
  colorWarningBg: string;
  colorWarningBorder: string;
  colorWarningText: string;

  // 错误色
  colorError:  string;
  colorErrorBg: string;
  colorErrorBorder: string;
  colorErrorText: string;

  // 信息色
  colorInfo: string;
  colorInfoBg: string;
  colorInfoBorder:  string;
  colorInfoText: string;

  // 中性色
  colorText: string;
  colorTextSecondary: string;
  colorTextTertiary: string;
  colorTextQuaternary: string;
  colorTextPlaceholder: string;
  colorTextDisabled: string;

  // 背景色
  colorBgContainer: string;
  colorBgLayout: string;
  colorBgSpotlight: string;
  colorBgMask: string;

  // 边框色
  colorBorder: string;
  colorBorderSecondary: string;

  // 填充色
  colorFill: string;
  colorFillSecondary: string;
  colorFillTertiary: string;
  colorFillQuaternary:  string;
}

/**
 * 字体 Token
 */
export interface TypographyToken {
  fontFamily: string;
  fontFamilyCode: string;

  fontSize: number;
  fontSizeSM: number;
  fontSizeLG: number;
  fontSizeXL: number;
  fontSizeHeading1: number;
  fontSizeHeading2: number;
  fontSizeHeading3: number;
  fontSizeHeading4: number;
  fontSizeHeading5: number;

  lineHeight: number;
  lineHeightSM: number;
  lineHeightLG: number;
  lineHeightHeading1: number;
  lineHeightHeading2: number;
  lineHeightHeading3: number;
  lineHeightHeading4: number;
  lineHeightHeading5: number;

  fontWeightStrong: number;
}

/**
 * 间距 Token
 */
export interface SpacingToken {
  // 尺寸
  sizeXXS: number;
  sizeXS: number;
  sizeSM: number;
  size: number;
  sizeMD: number;
  sizeLG: number;
  sizeXL: number;
  sizeXXL:  number;

  // 间距
  padding: number;
  paddingXS: number;
  paddingSM: number;
  paddingMD: number;
  paddingLG: number;
  paddingXL: number;

  margin: number;
  marginXS: number;
  marginSM: number;
  marginMD:  number;
  marginLG: number;
  marginXL: number;

  // 圆角
  borderRadius: number;
  borderRadiusSM: number;
  borderRadiusLG: number;
  borderRadiusXS: number;
}

/**
 * 动画 Token
 */
export interface MotionToken {
  motionDurationFast: string;
  motionDurationMid: string;
  motionDurationSlow: string;
  motionEaseInOut: string;
  motionEaseOut: string;
  motionEaseIn: string;
}

/**
 * 阴影 Token
 */
export interface ShadowToken {
  boxShadow: string;
  boxShadowSecondary: string;
  boxShadowTertiary:  string;
}

/**
 * 完整的 Design Token
 */
export interface DesignToken
  extends ColorToken,
    TypographyToken,
    SpacingToken,
    MotionToken,
    ShadowToken {
  // 线宽
  lineWidth: number;
  lineWidthBold: number;

  // 控件高度
  controlHeight: number;
  controlHeightSM: number;
  controlHeightLG: number;
  controlHeightXS: number;

  // z-index
  zIndexBase: number;
  zIndexPopupBase: number;
}

/**
 * 主题类型
 */
export type ThemeMode = 'light' | 'dark';

/**
 * 主题配置
 */
export interface ThemeConfig {
  /** 主题模式 */
  mode?: ThemeMode;
  /** 自定义 Token */
  token?: Partial<DesignToken>;
  /** 紧凑模式 */
  compact?: boolean;
  /** 组件级别配置 */
  components?: {
    [componentName: string]: Partial<DesignToken> & Record<string, unknown>;
  };
  /** 是否继承 Antd 主题 */
  inherit?: boolean;
  /** CSS 变量前缀 */
  cssVarPrefix?: string;
  /** 算法 */
  algorithm?: AntdThemeConfig['algorithm'];
}

/**
 * 主题上下文值
 */
export interface ThemeContextValue {
  theme: ThemeConfig;
  token: DesignToken;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: Partial<ThemeConfig>) => void;
}