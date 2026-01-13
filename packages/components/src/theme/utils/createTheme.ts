import { theme as antdTheme } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd';
import type { ThemeConfig, DesignToken, ThemeMode } from '../interface';
import { defaultToken, darkToken, compactToken } from '../tokens';

/**
 * 合并主题配置
 */
export const mergeToken = (
  baseToken: DesignToken,
  customToken?: Partial<DesignToken>
): DesignToken => {
  if (!customToken) return baseToken;
  return { ...baseToken, ...customToken };
};

/**
 * 根据主题模式获取基础 Token
 */
export const getBaseToken = (mode: ThemeMode): DesignToken => {
  return mode === 'dark' ? darkToken :  defaultToken;
};

/**
 * 创建主题配置
 */
export const createTheme = (config: ThemeConfig = {}): AntdThemeConfig => {
  const { mode = 'light', token: customToken, compact = false } = config;
  
  // 获取基础 Token
  let baseToken = getBaseToken(mode);
  
  // 如果是紧凑模式，合并紧凑 Token
  if (compact) {
    baseToken = mergeToken(baseToken, compactToken);
  }
  
  // 合并自定义 Token
  const finalToken = mergeToken(baseToken, customToken);
  
  // 返回 Ant Design 主题配置
  return {
    algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: finalToken,
  };
};