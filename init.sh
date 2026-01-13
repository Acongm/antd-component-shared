#!/bin/bash

# 创建项目目录
mkdir my-component-lib && cd my-component-lib

# 初始化 git
git init

# 创建目录结构
mkdir -p . changeset
mkdir -p .github/workflows
mkdir -p . husky
mkdir -p docs/{guide,components}
mkdir -p packages/components/src/FormRenderer/__tests__
mkdir -p packages/hooks/src

# 初始化 pnpm
pnpm init

# 安装依赖
pnpm install

# 初始化 changeset
pnpm changeset init

# 初始化 husky
pnpm husky install
npx husky add . husky/pre-commit "pnpm lint-staged"

echo "✅ 项目初始化完成！"
echo "📦 运行 pnpm install 安装依赖"
echo "🚀 运行 pnpm docs:dev 启动文档"
echo "📖 运行 pnpm build 构建组件库"