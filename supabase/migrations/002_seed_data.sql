-- 插入示例课程数据
insert into courses (title, description, category, level, duration, instructor, image_url, price, is_premium) values
('Python数据分析基础', '从零开始学习Python数据分析的核心概念和技术', '数据分析', 'beginner', 12, '李老师', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c2?w=400', 0, false),
('Pandas数据处理实战', '深入学习Pandas库，掌握数据清洗和处理技巧', '数据分析', 'intermediate', 16, '王老师', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', 99, true),
('数据可视化高级技巧', '使用Matplotlib和Seaborn创建专业的数据可视化图表', '数据可视化', 'advanced', 14, '张老师', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400', 129, true);

-- 插入示例课程内容
insert into lessons (course_id, title, content, order_index, is_premium) values
(1, 'Python基础语法', '<p>学习Python的基本语法和数据类型</p>', 1, false),
(1, 'NumPy入门', '<p>了解NumPy库的基本功能和数组操作</p>', 2, false),
(1, 'Pandas基础', '<p>学习Pandas的DataFrame和Series操作</p>', 3, false),
(2, '数据清洗技术', '<p>掌握数据清洗的常用方法和最佳实践</p>', 1, true),
(2, '数据合并与分组', '<p>学习数据合并和分组聚合操作</p>', 2, true),
(3, 'Matplotlib绘图基础', '<p>学习使用Matplotlib创建基本图表</p>', 1, true),
(3, 'Seaborn高级可视化', '<p>使用Seaborn创建更精美的统计图表</p>', 2, true);

-- 插入示例练习
insert into practice_exercises (lesson_id, title, description, difficulty, instructions, starter_code, solution, is_premium) values
(1, 'Hello Python', '编写一个简单的Python程序', 'beginner', '打印"Hello, Python!"', 'print("Hello, Python!")', 'print("Hello, Python!")', false),
(2, '创建NumPy数组', '使用NumPy创建一个数组', 'beginner', '创建一个从0到9的数组', 'import numpy as np\narr = np.arange(10)\nprint(arr)', 'import numpy as np\narr = np.arange(10)\nprint(arr)', false),
(4, '处理缺失值', '学习如何处理数据中的缺失值', 'intermediate', '使用dropna和fillna方法', 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4],\n    "B": [5, np.nan, 7, 8]\n})\n\n# 处理缺失值', 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4],\n    "B": [5, np.nan, 7, 8]\n})\n\n# 处理缺失值\ndf_clean = df.fillna(0)\nprint(df_clean)', true);

-- 插入示例徽章
insert into badges (name, description, image_url, condition, points) values
('初级学习者', '完成第一个课程的学习', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100', '完成任何课程的第一节课', 10),
('持续学习者', '连续学习7天', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100', '连续7天有学习记录', 25),
('数据分析师', '完成所有初级课程', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100', '完成3门初级课程', 50);
