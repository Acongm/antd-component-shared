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
  themeConfig: AntdThemeConfig;
  token: DesignToken;
} => {
  const { mode = 'light', token: customToken, algorithm, components, inherit = true } = config;

  // 获取基础 Token
  let baseToken = getBaseToken(mode);

  // 合并自定义 Token
  const finalToken = mergeToken(baseToken, customToken);

  // 构建 Antd 主题配置
  const themeConfig: AntdThemeConfig = {
    token: inherit ? finalToken : customToken,
    algorithm: algorithm || (mode === 'dark' ? antdTheme.darkAlgorithm : undefined),
    components,
  };

  return {
    themeConfig,
    token: finalToken,
  };
};

/**
 * 创建紧凑主题
 */
export const createCompactTheme = (config: ThemeConfig = {}): {
  themeConfig: AntdThemeConfig;
  token: DesignToken;
} => {
  const { token: customToken, ...restConfig } = config;
  
  return createTheme({
    ...restConfig,
    token: mergeToken(compactToken, customToken),
    algorithm: [antdTheme.compactAlgorithm, ...(Array.isArray(config.algorithm) ? config.algorithm : config.algorithm ? [config.algorithm] : [])],
  });
};