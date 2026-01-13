# Changesets

Changesets 是一个用于管理 monorepo 版本和发布的工具。

## 使用方法

### 1. 添加 Changeset

当你对包进行了修改后，运行：

```bash
pnpm changeset
```

按照提示选择：
- 修改了哪些包
- 版本变更类型（major/minor/patch）
- 变更描述

### 2. 版本发布

提交所有 changeset 后，运行：

```bash
pnpm version-packages
```

这会更新所有包的版本号并生成 CHANGELOG.md

### 3. 发布到 npm

```bash
pnpm release
```

## CI 自动发布

当 PR 合并到 main 分支时，GitHub Actions 会自动：
1. 检测 changeset 文件
2. 创建 Release PR
3. 合并 Release PR 后自动发布到 npm
