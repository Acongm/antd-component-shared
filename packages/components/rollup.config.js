import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const external = [
  ... Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
  /^antd/,
  /^react/,
  /^@ant-design/,
];

export default [
  // ESM 构建
  {
    input: 'src/index.ts',
    output:  {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig:  './tsconfig.build.json',
        declaration: true,
        declarationDir: 'dist/types',
        outDir: 'dist/esm',
      }),
      postcss({
        extract: 'styles.css',
        minimize: true,
        use: ['less'],
      }),
    ],
    external,
  },
  // CJS 构建
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: false,
        outDir: 'dist/cjs',
      }),
      postcss({
        extract: false,
        inject: false,
        use: ['less'],
      }),
    ],
    external,
  },
];
