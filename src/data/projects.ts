export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  tasks: string[];
  starterCode: string;
  datasetCode: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '销售数据基础分析',
    description: '分析销售数据，了解基本的数据分析流程和方法',
    difficulty: 'beginner',
    category: '基础分析',
    tasks: [
      '导入并查看数据集基本信息',
      '分析销售趋势',
      '计算销售总额和平均值',
      '识别销售最好的产品',
      '生成销售趋势图表'
    ],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('sales_data.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析销售趋势
# TODO: 实现销售趋势分析

# 计算销售总额和平均值
# TODO: 计算销售总额和平均值

# 识别销售最好的产品
# TODO: 识别销售最好的产品

# 生成销售趋势图表
# TODO: 生成销售趋势图表
`,
    datasetCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成销售数据
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', end='2023-12-31', freq='D')
products = ['产品A', '产品B', '产品C', '产品D', '产品E']

# 生成随机销售数据
data = []
for date in dates:
    for product in products:
        sales = np.random.randint(10, 100)
        revenue = sales * np.random.uniform(10, 100)
        data.append({
            'date': date,
            'product': product,
            'sales': sales,
            'revenue': revenue
        })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('sales_data.csv', index=False)
print('销售数据生成完成！')
`
  },
  {
    id: 'project-2',
    title: '客户分群分析',
    description: '使用聚类算法对客户进行分群，了解不同客户群体的特征',
    difficulty: 'intermediate',
    category: '客户分析',
    tasks: [
      '导入客户数据',
      '数据预处理和特征工程',
      '使用K-means算法进行聚类',
      '分析不同客户群体的特征',
      '可视化客户分群结果'
    ],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('customer_data.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 数据预处理和特征工程
# TODO: 实现数据预处理和特征工程

# 使用K-means算法进行聚类
# TODO: 实现K-means聚类

# 分析不同客户群体的特征
# TODO: 分析客户群体特征

# 可视化客户分群结果
# TODO: 可视化分群结果
`,
    datasetCode: `import pandas as pd
import numpy as np

# 生成客户数据
np.random.seed(42)

# 生成1000个客户数据
n_customers = 1000

# 生成特征
age = np.random.randint(18, 70, n_customers)
income = np.random.normal(50000, 20000, n_customers)
income = np.maximum(10000, income)  # 确保收入为正
spending_score = np.random.randint(1, 100, n_customers)
purchase_frequency = np.random.randint(1, 50, n_customers)

# 创建DataFrame
df = pd.DataFrame({
    'age': age,
    'income': income,
    'spending_score': spending_score,
    'purchase_frequency': purchase_frequency
})

# 保存数据
df.to_csv('customer_data.csv', index=False)
print('客户数据生成完成！')
`
  },
  {
    id: 'project-3',
    title: '市场趋势预测',
    description: '使用时间序列分析预测市场趋势',
    difficulty: 'intermediate',
    category: '预测分析',
    tasks: [
      '导入市场数据',
      '数据预处理和时间序列分析',
      '构建预测模型',
      '评估模型性能',
      '生成预测结果和可视化'
    ],
    starterCode: `import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('market_data.csv')
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)

# 查看数据基本信息
print(df.head())
print(df.info())

# 数据预处理和时间序列分析
# TODO: 实现数据预处理和时间序列分析

# 构建预测模型
# TODO: 构建ARIMA模型

# 评估模型性能
# TODO: 评估模型性能

# 生成预测结果和可视化
# TODO: 生成预测结果和可视化
`,
    datasetCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成市场数据
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', end='2023-12-31', freq='D')

# 生成基础趋势
base_trend = np.linspace(100, 200, len(dates))

# 添加季节性因素
seasonal = 10 * np.sin(np.arange(len(dates)) * 2 * np.pi / 365)

# 添加随机噪声
noise = np.random.normal(0, 5, len(dates))

# 生成最终数据
price = base_trend + seasonal + noise

# 创建DataFrame
df = pd.DataFrame({
    'date': dates,
    'price': price
})

# 保存数据
df.to_csv('market_data.csv', index=False)
print('市场数据生成完成！')
`
  },
  {
    id: 'project-4',
    title: '网站用户行为分析',
    description: '分析网站用户行为数据，优化用户体验',
    difficulty: 'intermediate',
    category: '用户行为',
    tasks: [
      '导入用户行为数据',
      '分析用户访问路径',
      '计算用户停留时间',
      '识别热门页面',
      '生成用户行为可视化'
    ],
    starterCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('user_behavior.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析用户访问路径
# TODO: 分析用户访问路径

# 计算用户停留时间
# TODO: 计算用户停留时间

# 识别热门页面
# TODO: 识别热门页面

# 生成用户行为可视化
# TODO: 生成用户行为可视化
`,
    datasetCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成用户行为数据
np.random.seed(42)

# 生成1000个用户会话
n_sessions = 1000
pages = ['首页', '产品页', '详情页', '购物车', '结算页', '成功页']

# 生成会话数据
data = []
for session_id in range(n_sessions):
    # 生成随机会话长度
    session_length = np.random.randint(1, 10)
    # 生成随机页面访问序列
    path = [np.random.choice(pages) for _ in range(session_length)]
    # 生成时间戳
    start_time = datetime.now()
    for i, page in enumerate(path):
        timestamp = start_time + timedelta(seconds=i * 10)
        data.append({
            'session_id': session_id,
            'timestamp': timestamp,
            'page': page,
            'duration': np.random.randint(5, 30)
        })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('user_behavior.csv', index=False)
print('用户行为数据生成完成！')
`
  },
  {
    id: 'project-5',
    title: '产品评论情感分析',
    description: '使用自然语言处理分析产品评论的情感倾向',
    difficulty: 'advanced',
    category: 'NLP分析',
    tasks: [
      '导入评论数据',
      '数据预处理和文本清洗',
      '情感分析模型构建',
      '评估模型性能',
      '生成情感分析结果可视化'
    ],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('product_reviews.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 数据预处理和文本清洗
# TODO: 实现文本清洗

# 情感分析模型构建
# TODO: 构建情感分析模型

# 评估模型性能
# TODO: 评估模型性能

# 生成情感分析结果可视化
# TODO: 生成可视化结果
`,
    datasetCode: `import pandas as pd
import numpy as np

# 生成产品评论数据
np.random.seed(42)

# 评论模板
positive_templates = [
    '这个产品非常好，我很喜欢！',
    '质量非常棒，超出预期',
    '服务态度很好，物流也很快',
    '性价比很高，推荐购买',
    '使用体验非常流畅'
]

negative_templates = [
    '质量很差，不符合预期',
    '服务态度不好，很失望',
    '物流很慢，等了很久',
    '性价比很低，不推荐购买',
    '使用体验很差'
]

# 生成500条评论
data = []
for i in range(500):
    if np.random.random() > 0.5:
        # 生成正面评论
        review = np.random.choice(positive_templates)
        sentiment = 1
    else:
        # 生成负面评论
        review = np.random.choice(negative_templates)
        sentiment = 0
    data.append({
        'review': review,
        'sentiment': sentiment
    })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('product_reviews.csv', index=False)
print('产品评论数据生成完成！')
`
  },
  {
    id: 'project-6',
    title: '库存优化分析',
    description: '分析库存数据，优化库存管理策略',
    difficulty: 'intermediate',
    category: '运营分析',
    tasks: [
      '导入库存数据',
      '分析库存周转率',
      '识别滞销和畅销产品',
      '预测库存需求',
      '生成库存优化建议'
    ],
    starterCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('inventory_data.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析库存周转率
# TODO: 计算库存周转率

# 识别滞销和畅销产品
# TODO: 识别滞销和畅销产品

# 预测库存需求
# TODO: 预测库存需求

# 生成库存优化建议
# TODO: 生成优化建议
`,
    datasetCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成库存数据
np.random.seed(42)

# 生成产品数据
products = [f'产品{i}' for i in range(1, 51)]

# 生成库存数据
data = []
for product in products:
    # 生成初始库存
    initial_stock = np.random.randint(50, 200)
    # 生成每月销量
    for month in range(1, 13):
        # 生成季节性销量
        base_sales = np.random.randint(20, 50)
        seasonal_factor = 1 + 0.5 * np.sin(2 * np.pi * month / 12)
        sales = int(base_sales * seasonal_factor)
        # 计算月末库存
        if month == 1:
            ending_stock = initial_stock - sales
        else:
            # 假设每月补货
            ending_stock = max(0, previous_stock - sales + np.random.randint(30, 60))
        previous_stock = ending_stock
        data.append({
            'product': product,
            'month': month,
            'initial_stock': initial_stock if month == 1 else previous_stock + np.random.randint(30, 60),
            'sales': sales,
            'ending_stock': ending_stock
        })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('inventory_data.csv', index=False)
print('库存数据生成完成！')
`
  },
  {
    id: 'project-7',
    title: '营销活动效果分析',
    description: '分析营销活动数据，评估活动效果',
    difficulty: 'intermediate',
    category: '营销分析',
    tasks: [
      '导入营销活动数据',
      '分析活动参与率',
      '计算转化率和ROI',
      '识别最佳活动策略',
      '生成活动效果可视化'
    ],
    starterCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('marketing_campaign.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析活动参与率
# TODO: 计算活动参与率

# 计算转化率和ROI
# TODO: 计算转化率和ROI

# 识别最佳活动策略
# TODO: 识别最佳活动策略

# 生成活动效果可视化
# TODO: 生成可视化结果
`,
    datasetCode: `import pandas as pd
import numpy as np

# 生成营销活动数据
np.random.seed(42)

# 活动类型
campaigns = ['社交媒体', '电子邮件', '线下活动', '搜索引擎', '合作推广']

# 生成100个活动数据
data = []
for i in range(100):
    campaign = np.random.choice(campaigns)
    # 生成随机数据
    budget = np.random.randint(1000, 10000)
    impressions = np.random.randint(10000, 100000)
    clicks = int(impressions * np.random.uniform(0.01, 0.1))
    conversions = int(clicks * np.random.uniform(0.01, 0.05))
    revenue = conversions * np.random.uniform(50, 200)
    roi = (revenue - budget) / budget * 100
    
    data.append({
        'campaign': campaign,
        'budget': budget,
        'impressions': impressions,
        'clicks': clicks,
        'conversions': conversions,
        'revenue': revenue,
        'roi': roi
    })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('marketing_campaign.csv', index=False)
print('营销活动数据生成完成！')
`
  },
  {
    id: 'project-8',
    title: '员工绩效分析',
    description: '分析员工绩效数据，优化人力资源管理',
    difficulty: 'intermediate',
    category: '人力资源',
    tasks: [
      '导入员工绩效数据',
      '分析绩效分布',
      '识别高绩效员工特征',
      '预测员工绩效',
      '生成绩效分析报告'
    ],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('employee_performance.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析绩效分布
# TODO: 分析绩效分布

# 识别高绩效员工特征
# TODO: 识别高绩效员工特征

# 预测员工绩效
# TODO: 构建预测模型

# 生成绩效分析报告
# TODO: 生成分析报告
`,
    datasetCode: `import pandas as pd
import numpy as np

# 生成员工绩效数据
np.random.seed(42)

# 生成1000名员工数据
n_employees = 1000

# 生成特征
age = np.random.randint(22, 65, n_employees)
tenure = np.random.randint(1, 20, n_employees)
education = np.random.randint(1, 5, n_employees)  # 1-4代表不同教育程度
training_hours = np.random.randint(0, 100, n_employees)
project_count = np.random.randint(1, 10, n_employees)

# 生成绩效评分（基于特征）
performance = 50 + 0.5 * age + 2 * tenure + 3 * education + 0.1 * training_hours + 1.5 * project_count + np.random.normal(0, 5, n_employees)
performance = np.clip(performance, 0, 100)  # 限制在0-100之间

# 创建DataFrame
df = pd.DataFrame({
    'age': age,
    'tenure': tenure,
    'education': education,
    'training_hours': training_hours,
    'project_count': project_count,
    'performance': performance
})

# 保存数据
df.to_csv('employee_performance.csv', index=False)
print('员工绩效数据生成完成！')
`
  },
  {
    id: 'project-9',
    title: '供应链优化分析',
    description: '分析供应链数据，优化供应链管理',
    difficulty: 'advanced',
    category: '供应链',
    tasks: [
      '导入供应链数据',
      '分析供应商绩效',
      '识别供应链瓶颈',
      '优化库存水平',
      '生成供应链优化建议'
    ],
    starterCode: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('supply_chain.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析供应商绩效
# TODO: 分析供应商绩效

# 识别供应链瓶颈
# TODO: 识别供应链瓶颈

# 优化库存水平
# TODO: 优化库存水平

# 生成供应链优化建议
# TODO: 生成优化建议
`,
    datasetCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成供应链数据
np.random.seed(42)

# 供应商数据
suppliers = [f'供应商{i}' for i in range(1, 21)]

# 生成1000条供应链记录
data = []
for i in range(1000):
    supplier = np.random.choice(suppliers)
    # 生成订单数据
    order_date = datetime.now() - timedelta(days=np.random.randint(0, 90))
    lead_time = np.random.randint(1, 14)  # 1-14天
    delivery_date = order_date + timedelta(days=lead_time)
    quantity = np.random.randint(10, 1000)
    cost = quantity * np.random.uniform(10, 100)
    quality_score = np.random.uniform(0, 10)
    on_time = np.random.random() > 0.1  # 90%准时交付
    
    data.append({
        'supplier': supplier,
        'order_date': order_date,
        'lead_time': lead_time,
        'delivery_date': delivery_date,
        'quantity': quantity,
        'cost': cost,
        'quality_score': quality_score,
        'on_time': on_time
    })

# 创建DataFrame
df = pd.DataFrame(data)

# 保存数据
df.to_csv('supply_chain.csv', index=False)
print('供应链数据生成完成！')
`
  },
  {
    id: 'project-10',
    title: '财务风险分析',
    description: '分析财务数据，评估财务风险',
    difficulty: 'advanced',
    category: '财务分析',
    tasks: [
      '导入财务数据',
      '分析财务指标',
      '评估财务风险',
      '构建风险预测模型',
      '生成财务风险报告'
    ],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report
import matplotlib.pyplot as plt

# 加载数据
df = pd.read_csv('financial_data.csv')

# 查看数据基本信息
print(df.head())
print(df.info())

# 分析财务指标
# TODO: 分析财务指标

# 评估财务风险
# TODO: 评估财务风险

# 构建风险预测模型
# TODO: 构建风险预测模型

# 生成财务风险报告
# TODO: 生成风险报告
`,
    datasetCode: `import pandas as pd
import numpy as np

# 生成财务数据
np.random.seed(42)

# 生成1000家公司的财务数据
n_companies = 1000

# 生成财务指标
revenue = np.random.normal(1000000, 500000, n_companies)
revenue = np.maximum(100000, revenue)  # 确保收入为正
expenses = revenue * np.random.uniform(0.6, 1.2)  # 支出占收入的60%-120%
profit = revenue - expenses
cash_flow = profit * np.random.uniform(0.8, 1.2)
debt = revenue * np.random.uniform(0, 2)  # 债务为收入的0-2倍
assets = revenue * np.random.uniform(1, 3)  # 资产为收入的1-3倍

# 计算财务比率
profit_margin = profit / revenue
debt_to_assets = debt / assets
current_ratio = assets / (debt * 0.5)  # 假设流动负债为债务的50%

# 生成风险标签（基于财务指标）
risk_score = (debt_to_assets * 0.5) + (1 - profit_margin * 2) + (1 / current_ratio * 0.3)
risk = risk_score > 1.5  # 风险阈值

# 创建DataFrame
df = pd.DataFrame({
    'revenue': revenue,
    'expenses': expenses,
    'profit': profit,
    'cash_flow': cash_flow,
    'debt': debt,
    'assets': assets,
    'profit_margin': profit_margin,
    'debt_to_assets': debt_to_assets,
    'current_ratio': current_ratio,
    'risk': risk
})

# 保存数据
df.to_csv('financial_data.csv', index=False)
print('财务数据生成完成！')
`
  }
];
