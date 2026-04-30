# Cloudflare Pages 部署配置

## 部署方式

### 方式一：直接拖拽上传（推荐）

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages
3. 点击 "Create application" → "Pages" → "Upload assets"
4. 直接拖拽 `/workspace` 文件夹到上传区域
5. 设置项目名称，点击部署

### 方式二：通过 Git 部署

1. 将项目推送到 GitHub/GitLab 仓库
2. 在 Cloudflare Pages 中连接仓库
3. 构建命令留空（纯静态文件）
4. 输出目录设置为 `/`（或 `.`）
5. 部署分支选择 `main`

### 方式三：使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 创建 Pages 项目
wrangler pages project create datamind-platform

# 上传静态文件
wrangler pages deploy ./ --project-name=datamind-platform
```

## 项目配置

- **项目名称**: datamind-platform
- **构建命令**: （留空）
- **输出目录**: /
- **环境变量**: 无需设置

## 访问说明

部署成功后，访问: `https://datamind-platform.pages.dev`

或自定义域名: `https://datamind.your-domain.com`
