import { createContext, useContext } from 'react';
import type { ThemeContextValue, ThemeMode } from '../theme/interface';
import { defaultToken } from '../theme/tokens';

/**
 * 主题上下文
 */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: { mode: 'light' },
  token: defaultToken,
  mode: 'light',
  setMode: () => {},
  setTheme: () => {},
});

/**
 * 使用主题上下文
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
