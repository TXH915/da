# 数据分析在线教育平台 - DataMind

## 1. Concept & Vision

DataMind 是一个专为商务数据分析与应用专业学生打造的沉浸式学习平台。平台以"探索数据的艺术"为核心概念，将数据分析学习转变为一场视觉与智力的双重旅程。采用深邃的暗色调搭配数据可视化的荧光色彩，营造专业的数据实验室氛围，让学生在模拟真实数据分析环境的情境中学习成长。

## 2. Design Language

### Aesthetic Direction
数据实验室风格 (Data Lab Aesthetic) - 结合深空探索与数据分析的可视化语言，创造沉浸式学习体验。

### Color Palette
```
--bg-primary: #0d1117          /* 深空黑 */
--bg-secondary: #161b22        /* 面板深灰 */
--bg-tertiary: #21262d         /* 卡片背景 */
--accent-primary: #58a6ff      /* 数据蓝 */
--accent-secondary: #7ee787    /* 成功绿 */
--accent-tertiary: #d29922     /* 警告金 */
--accent-purple: #a371f7       /* 成就紫 */
--accent-pink: #f778ba         /* 重点粉 */
--text-primary: #f0f6fc        /* 主文本 */
--text-secondary: #8b949e      /* 次文本 */
--border-color: #30363d        /* 边框 */
```

### Typography
- 标题: "Outfit", sans-serif - 现代几何感
- 正文: "Source Sans 3", sans-serif - 清晰可读
- 代码: "JetBrains Mono", monospace - 专业开发者风格

### Motion Philosophy
- 页面切换: 滑入 + 淡入, 400ms cubic-bezier(0.4, 0, 0.2, 1)
- 卡片悬停: 上浮 + 发光边框, 200ms
- 成就解锁: 粒子爆炸 + 缩放弹跳, 600ms
- 代码运行: 终端打字机效果 + 进度条

### Visual Assets
- 图标: Phosphor Icons (duotone style)
- 装饰: 流动的数据节点背景, 网格线, 发光粒子
- 代码高亮: 自定义暗色主题

## 3. Layout & Structure

### Page Architecture
```
├── 首页 (Home)
│   ├── Hero: 动态数据流动画
│   ├── 学习路径可视化
│   ├── 项目展示区
│   └── 成就预览
│
├── 课程概览 (Courses)
│   ├── 学习阶段导航
│   ├── 项目卡片网格
│   └── 学习进度追踪
│
├── 项目详情页 (Project/:id)
│   ├── 概念理论区 (左侧)
│   ├── 代码实践区 (中央)
│   ├── 参考答案区 (可展开)
│   └── 练习测验区
│
├── 成就中心 (Achievements)
│   ├── 已获成就展示
│   └── 成就进度
│
└── 个人学习 (Learning)
    ├── 学习记录
    ├── 练习统计
    └── 学习路线图
```

### Responsive Strategy
- Desktop: 三栏布局 (理论-代码-答案)
- Tablet: 双栏切换 (理论/代码)
- Mobile: 单栏 + 标签切换

## 4. Features & Interactions

### 核心功能

#### 4.1 课程体系 (10个循序渐进的项目)

**基础入门阶段 (1-3)**
1. **数据清洗实践** - 缺失值处理、重复值检测、数据类型转换
2. **数据探索分析** - 描述性统计、分布分析、相关性探索
3. **可视化入门** - matplotlib基础图表、图表美化

**进阶应用阶段 (4-6)**
4. **购物篮分析** - 关联规则挖掘、Apriori算法实战
5. **用户画像构建** - 聚类分析、标签体系设计
6. **销售数据分析** - 时间序列分析、趋势预测

**高级实战阶段 (7-10)**
7. **异常值检测** - 统计方法、机器学习检测
8. **预测模型实战** - 回归分析、模型评估
9. **文本数据挖掘** - 词云、情感分析基础
10. **综合项目实战** - 完整数据分析流程

#### 4.2 互动式学习模块

**代码编辑器特性:**
- Python语法高亮
- 自动补全提示
- 一键运行代码
- 实时输出展示
- 代码重置功能
- 答案查看控制

**交互细节:**
- 悬停卡片: 边框发光 + 轻微上浮
- 标签切换: 下划线滑动动画
- 成就解锁: 震动反馈 + 粒子特效
- 进度更新: 数字滚动动画

#### 4.3 学-练-测闭环

**学习 (Learn):**
- 概念理论模块: Markdown渲染 + 代码示例
- 核心知识点高亮
- 图文并茂的解释

**练习 (Practice):**
- 代码实践区: 可编辑Python代码
- 运行结果显示
- 分步引导

**测评 (Test):**
- 随堂测验题目
- 即时反馈
- 答案解析

#### 4.4 成就激励系统

**成就类型:**
- 🏆 初学者: 完成第一个项目
- 🔥 连续学习: 3天/7天/30天
- 💡 首次开光: 运行第一次代码
- 🎯 全科毕业: 完成所有项目
- ⭐ 满分学员: 测验全对
- 🚀 快速学习: 单项目30分钟内完成
- 📊 数据分析师: 完成进阶阶段
- 🎓 大师之路: 完成高级阶段

**激励机制:**
- 进度百分比显示
- 解锁动画特效
- 成就徽章收集

## 5. Component Inventory

### Navigation
- 固定顶部导航栏
- Logo + 导航链接 + 成就入口
- 移动端汉堡菜单

### ProjectCard
- 项目封面图标
- 标题 + 难度标签
- 进度指示器
- 悬停: 发光边框 + 上浮

### CodeEditor
- 深色主题编辑器
- 行号显示
- 语法高亮
- 运行按钮
- 输出终端

### TheoryPanel
- Markdown渲染区
- 代码块高亮
- 重点标注

### AnswerPanel
- 可折叠区域
- 完整代码展示
- 复制按钮

### QuizCard
- 题目描述
- 选项列表
- 提交按钮
- 反馈动画

### AchievementBadge
- 徽章图标
- 名称 + 描述
- 解锁状态指示
- 进度条(未解锁)

### ProgressBar
- 百分比显示
- 动画填充
- 颜色渐变

## 6. Technical Approach

### Architecture
- 单页应用 (SPA)
- 纯前端实现 (HTML/CSS/JavaScript)
- 本地存储进度 (localStorage)
- 部署至 Cloudflare Pages

### Data Structure
```javascript
// 项目数据结构
{
  id: "data-cleaning",
  title: "数据清洗实践",
  level: "basic",
  levelName: "基础入门",
  levelColor: "#58a6ff",
  duration: "2小时",
  objectives: [...],
  theory: {...},
  practice: {
    instruction: "...",
    starterCode: "...",
    referenceAnswer: "..."
  },
  quiz: [...],
  achievement: "first_step"
}

// 学习进度
{
  completedProjects: [...],
  currentProject: "...",
  quizScores: {...},
  achievements: [...],
  streak: 3,
  lastVisit: "2024-01-15"
}
```

### Key Libraries
- Marked.js: Markdown渲染
- Prism.js: 代码高亮
- LocalStorage: 进度持久化

## 7. Content Structure

### 每个项目的完整内容包含:

1. **概念理论模块**
   - 核心概念定义
   - 适用场景说明
   - 方法原理讲解
   - 案例代码示例
   - 常见问题解答

2. **测试代码模块**
   - 引导练习题目
   - 填空式代码
   - 分步提示
   - 运行结果展示

3. **参考答案模块**
   - 完整代码解决方案
   - 代码注释解释
   - 运行效果截图说明

### 学习流程
每个项目的学习流程:
```
进入项目 → 阅读理论 → 完成练习代码 → 运行验证 → 完成测验 → 获得成就
```

## 8. 成就系统设计

### 成就等级
- 🥉 铜牌成就: 入门奖励
- 🥈 银牌成就: 进阶奖励
- 🥇 金牌成就: 高级奖励
- 💎 钻石成就: 综合实力

### 成就列表
1. first_project - 完成首个项目
2. data_cleaner - 完成数据清洗
3. explorer - 完成数据探索
4. visualizer - 完成可视化入门
5. basket_master - 完成购物篮分析
6. profile_builder - 完成用户画像
7. sales_analyst - 完成销售分析
8. anomaly_hunter - 完成异常值检测
9. predictor - 完成预测模型
10. text_miner - 完成文本挖掘
11. data_master - 完成综合项目
12. perfect_quiz - 测验满分
13. week_streak - 7天连续学习
14. all_complete - 完成所有项目
15. speed_learner - 快速完成单个项目

## 9. 页面详细设计

### 首页设计
- 全屏Hero区: 动态背景 + 品牌标语
- 学习路径图: 可视化课程结构
- 项目展示: 滚动卡片
- 成就预览: 徽章画廊
- CTA: 开始学习按钮

### 课程概览设计
- 三栏筛选: 全部/基础/进阶/高级
- 项目网格: 难度色标
- 进度环形图
- 已完成标记

### 项目详情页设计
- 顶部: 项目信息卡
- 左侧面板: 理论内容
- 中央面板: 代码编辑器
- 右侧面板: 参考答案 (可折叠)
- 底部: 测验区
