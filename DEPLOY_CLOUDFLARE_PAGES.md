# Cloudflare Pages 部署指南

## 概述

本指南将帮助您将 Python 数据分析 AI 训练平台部署到 Cloudflare Pages，使其成为一个全球可访问的网站。

## 前提条件

1. 已创建 GitHub 仓库并推送了所有代码
2. 已注册 Cloudflare 账号
3. 项目已通过 `npm run build` 成功构建

## 部署步骤

### 步骤 1: 登录 Cloudflare 控制台

1. 访问 https://dash.cloudflare.com
2. 使用您的 Cloudflare 账号登录

### 步骤 2: 进入 Pages 服务

1. 在左侧菜单中点击 "Pages"
2. 点击 "Create a Project" 按钮

### 步骤 3: 关联 GitHub 仓库

1. 选择 "Connect to Git"
2. 选择 "GitHub" 作为代码源
3. 如果是第一次连接，需要授权 Cloudflare 访问您的 GitHub 账号
4. 在仓库列表中找到并选择 `TXH915/da` 仓库
5. 点击 "Begin setup"

### 步骤 4: 配置构建参数

在构建配置页面，设置以下参数：

| 参数 | 值 |
|------|-----|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | (留空，使用默认值) |

### 步骤 5: 部署项目

1. 点击 "Save and Deploy"
2. Cloudflare Pages 将开始构建和部署过程
3. 等待部署完成（通常需要 1-2 分钟）

### 步骤 6: 访问您的网站

1. 部署完成后，Cloudflare Pages 将为您生成一个唯一的 URL
2. 您可以在 Pages 项目详情页面找到这个 URL
3. 点击 URL 访问您的网站

## 部署 Cloudflare Workers (AI API 代理)

要使 AI 陪练功能正常工作，您还需要部署 Cloudflare Workers：

### 步骤 1: 创建 Worker

1. 在 Cloudflare 控制台左侧菜单中点击 "Workers & Pages"
2. 点击 "Create Worker" 按钮
3. 为 Worker 命名（例如 `ai-proxy`）
4. 点击 "Create Worker"

### 步骤 2: 编辑 Worker 代码

1. 在 Worker 编辑器中，删除默认代码
2. 复制 [worker.ts](file:///workspace/worker.ts) 文件的内容并粘贴到编辑器中
3. 点击 "Save and Deploy"

### 步骤 3: 配置环境变量

1. 在 Worker 详情页面，点击 "Settings"
2. 选择 "Variables"
3. 点击 "Add variable" 按钮，添加以下环境变量：

| 变量名 | 值 | 加密 |
|--------|-----|------|
| CLOUDFLARE_ACCOUNT_ID | 您的 Cloudflare 账号 ID | 否 |
| AI_GATEWAY_NAME | 您的 AI Gateway 名称 | 否 |
| AI_API_KEY | 您的 AI API 密钥 | 是 (开启加密) |

### 步骤 4: 配置 Cloudflare AI Gateway

1. 在 Cloudflare 控制台左侧菜单中点击 "AI"
2. 选择 "AI Gateway"
3. 点击 "Create Gateway"
4. 为 Gateway 命名
5. 配置您的 AI 服务提供商（如豆包、OpenAI 等）
6. 复制生成的 Gateway URL

### 步骤 5: 更新前端配置

在前端代码中更新 Worker 的访问地址，确保 AI 请求能够正确发送。

## 自定义域名（可选）

如果您有自己的域名，可以将其绑定到 Cloudflare Pages：

1. 在 Pages 项目详情页面，点击 "Custom domains"
2. 点击 "Add custom domain"
3. 输入您的域名（例如 `python-data-analysis.com`）
4. 按照提示完成 DNS 配置

## 验证部署

部署完成后，您可以通过以下方式验证：

1. 访问生成的 Cloudflare Pages URL
2. 检查网站是否正常加载
3. 测试 Python 代码运行功能
4. 测试 AI 陪练功能

## 常见问题

### Q: 部署失败怎么办？
A: 检查构建日志，查看具体错误信息。常见问题包括依赖安装失败、构建命令错误等。

### Q: 网站加载缓慢怎么办？
A: Cloudflare Pages 会自动缓存内容并通过全球 CDN 分发，通常加载速度很快。如果遇到问题，可以检查网络连接或尝试清除浏览器缓存。

### Q: 如何更新已部署的网站？
A: 只需将代码推送到 GitHub 仓库，Cloudflare Pages 会自动触发重新构建和部署。

### Q: 如何查看部署历史？
A: 在 Pages 项目详情页面，点击 "Deployments" 选项卡，可以查看所有部署历史和构建日志。
