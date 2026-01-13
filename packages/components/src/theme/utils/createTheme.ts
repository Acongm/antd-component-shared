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
  if (! customToken) return baseToken;
  return { ...baseToken, ... customToken };
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
export const createTheme = (config: ThemeConfig = {}): {