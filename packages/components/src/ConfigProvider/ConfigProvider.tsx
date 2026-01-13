import React, { useMemo, useState, useCallback } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import type { ConfigProviderProps as AntdConfigProviderProps } from 'antd';
import { ThemeContext } from './context';
import { createTheme } from '../theme/utils/createTheme';
import type { ThemeConfig, ThemeMode } from '../theme/interface';

export interface ConfigProviderProps extends Omit<AntdConfigProviderProps, 'theme'> {
  /** 初始主题配置 */
  theme?: ThemeConfig;
  /** 子组件 */
  children?: React.ReactNode;
}

/**
 * 配置提供者组件
 * 提供主题配置和全局状态管理
 */
export const ConfigProvider: React.FC<ConfigProviderProps> = ({
  theme: initialTheme,
  children,
  ...restProps
}) => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(initialTheme || { mode: 'light' });

  // 创建 Antd 主题配置
  const { themeConfig: antdThemeConfig, token } = useMemo(
    () => createTheme(themeConfig),
    [themeConfig]
  );

  // 设置主题模式
  const setMode = useCallback((mode: ThemeMode) => {
    setThemeConfig((prev) => ({
      ...prev,
      mode,
    }));
  }, []);

  // 设置主题配置
  const setTheme = useCallback((theme: Partial<ThemeConfig>) => {
    setThemeConfig((prev) => ({
      ...prev,
      ...theme,
    }));
  }, []);

  // 主题上下文值
  const contextValue = useMemo(
    () => ({
      theme: themeConfig,
      token,
      mode: themeConfig.mode || 'light',
      setMode,
      setTheme,
    }),
    [themeConfig, token, setMode, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <AntdConfigProvider theme={antdThemeConfig} {...restProps}>
        {children}
      </AntdConfigProvider>
    </ThemeContext.Provider>
  );
};

ConfigProvider.displayName = 'ConfigProvider';
