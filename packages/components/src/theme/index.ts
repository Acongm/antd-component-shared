// 主题接口
export type * from './interface';

// Design Tokens
export {
  defaultToken,
  darkToken,
  compactToken,
  lightColors,
  darkColors,
  typography,
  spacing,
  compactSpacing,
} from './tokens';

// 主题工具
export { createTheme, createCompactTheme, mergeToken, getBaseToken } from './utils/createTheme';
