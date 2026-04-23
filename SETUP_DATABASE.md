# 数据库设置指南

## 问题原因

您的数据库表没有创建是因为项目缺少：
1. 数据库表创建的SQL脚本
2. 示例数据填充脚本
3. 正确的Supabase配置

## 解决步骤

### 1. 在Supabase中运行SQL脚本

1. 登录您的Supabase控制台 (https://app.supabase.com)
2. 选择您的项目
3. 点击左侧菜单的 "SQL Editor"
4. 点击 "New Query"
5. 打开项目中的 `supabase/migrations/001_create_tables.sql` 文件
6. 复制全部内容并粘贴到SQL编辑器中
7. 点击 "Run" 执行脚本，创建所有表
8. 再次点击 "New Query"
9. 打开 `supabase/migrations/002_seed_data.sql` 文件
10. 复制全部内容并粘贴到SQL编辑器中
11. 点击 "Run" 执行脚本，填充示例数据

### 2. 获取Supabase配置信息

1. 在Supabase控制台中，点击左侧菜单的 "Settings"
2. 选择 "API"
3. 复制以下信息：
   - Project URL
   - anon public key

### 3. 更新项目配置

更新 `src/supabase/client.ts` 文件，将占位符替换为您的真实Supabase配置：

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co'; // 替换为您的URL
const supabaseAnonKey = 'your-anon-key'; // 替换为您的anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 4. 验证表创建

1. 在Supabase控制台中，点击左侧菜单的 "Table Editor"
2. 您应该能看到以下表：
   - users
   - courses
   - lessons
   - practice_exercises
   - course_enrollments
   - learning_progress
   - practice_submissions
   - badges
   - achievements

## 数据库表说明

### 核心表

1. **users** - 用户信息表
2. **courses** - 课程信息表
3. **lessons** - 课程内容表
4. **practice_exercises** - 练习题表
5. **course_enrollments** - 课程报名记录表
6. **learning_progress** - 学习进度表
7. **practice_submissions** - 练习提交记录表
8. **badges** - 徽章信息表
9. **achievements** - 用户成就记录表

### 安全策略

所有表都启用了行级安全策略（RLS），确保：
- 用户只能查看和修改自己的数据
- 公开内容（课程、练习等）对所有用户可见
- 通过Supabase Auth进行用户身份验证

## 常见问题

### Q: 运行SQL脚本时出现错误怎么办？
A: 确保按照顺序先运行001_create_tables.sql，再运行002_seed_data.sql。如果有错误，请检查错误信息。

### Q: 如何查看表中的数据？
A: 在Supabase控制台的Table Editor中，点击表名即可查看和编辑数据。

### Q: 如何添加更多课程和内容？
A: 可以在SQL Editor中直接执行INSERT语句，或者在Table Editor中手动添加数据。

### Q: 数据库配置更新后需要重新构建吗？
A: 是的，更新配置后需要重新运行 `npm run build` 或重启开发服务器。
