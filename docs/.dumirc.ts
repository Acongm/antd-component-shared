import { defineConfig } from 'dumi';

export default defineConfig({
  // 站点标题
  themeConfig: {
    name: 'My Component Lib',
    logo: '/logo.png',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/form-renderer' },
      { title: 'GitHub', link: 'https://github.com/your-org/my-component-lib' },
    ],
    sidebar: {
      '/guide': [
        {
          title:  '介绍',
          children: [
            { title: '快速开始', link: '/guide' },
            { title: '安装', link: '/guide/install' },
            { title: '更新日志', link: '/guide/changelog' },
          ],
        },
      ],
      '/components':  [
        {
          title: '表单组件',
          children: [
            { title: 'FormRenderer 表单渲染器', link: '/components/form-renderer' },
          ],
        },
        {
          title:  '数据展示',
          children: [
            // 后续添加更多组件
          ],
        },
      ],
    },
    footer: 'Copyright © 2024 My Component Lib',
    socialLinks: {
      github: 'https://github.com/your-org/my-component-lib',
    },
  },

  // 输出目录
  outputPath: 'dist',

  // 基础路径（部署到子目录时需要）
  base: '/',
  publicPath: '/',

  // 网站标题
  title:  'My Component Lib',

  // 网站描述
  description: '基于 Antd 的 React 组件库',

  // 网站 favicon
  favicons: ['/favicon.ico'],

  // 配置 Markdown 解析
  resolve: {
    // 组件库入口
    entryFile: '../packages/components/src/index.ts',
    // 自动生成组件 API 文档
    atomDirs: [
      { type: 'component', dir: '../packages/components/src' },
    ],
  },

  // 别名配置
  alias:  {
    '@acongmr/antd-components':  '../packages/components/src',
  },

  // 主题配置
  theme: {
    '@c-primary':  '#1677ff',
  },

  // 代码高亮
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },

  // 配置额外的 babel 插件
  extraBabelPlugins:  [
    [
      'import',
      {
        libraryName:  'antd',
        libraryDirectory: 'es',
        style:  true,
      },
    ],
  ],

  // 站点导出配置
  exportStatic: {},

  // SSR 配置（提升首屏加载速度）
  ssr: process.env.NODE_ENV === 'production' ? {} : false,
});