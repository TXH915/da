import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BookOpen, Award, Code, TrendingUp, ChevronRight, Clock, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, courses, fetchCourses, isLoading } = useStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // 模拟学习数据
  const learningData = [
    { name: 'Python基础', progress: 75, color: '#4361ee' },
    { name: '数据分析入门', progress: 45, color: '#3a0ca3' },
    { name: '商务数据分析', progress: 20, color: '#4cc9f0' },
  ];

  // 模拟技能数据
  const skillData = [
    { name: 'Python', value: 65 },
    { name: '数据分析', value: 45 },
    { name: '数据可视化', value: 30 },
    { name: '商务分析', value: 25 },
  ];

  const COLORS = ['#4361ee', '#3a0ca3', '#4cc9f0', '#f72585'];

  // 模拟最近活动
  const recentActivities = [
    { id: 1, course: 'Python基础编程', action: '完成了章节 2: 变量和数据类型', time: '2小时前' },
    { id: 2, course: '数据分析入门', action: '提交了练习: 数据类型识别', time: '昨天' },
    { id: 3, course: 'Python基础编程', action: '开始了章节 3: 控制流语句', time: '2天前' },
  ];

  // 推荐课程（前3个）
  const recommendedCourses = courses.slice(0, 3);

  if (!user) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">请先登录</h3>
        <p className="text-gray-500 mb-4">登录后查看您的学习仪表盘</p>
        <Link
          to="/login"
          className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
        >
          去登录
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">欢迎回来，{user.name || user.email}！</h1>
            <p className="opacity-90">继续您的学习之旅，掌握数据分析技能</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/courses"
              className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300 flex items-center"
            >
              浏览课程
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">已学课程</p>
              <h3 className="text-2xl font-bold mt-1">3/12</h3>
            </div>
            <BookOpen className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">获得成就</p>
              <h3 className="text-2xl font-bold mt-1">5/20</h3>
            </div>
            <Award className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">练习完成</p>
              <h3 className="text-2xl font-bold mt-1">8/30</h3>
            </div>
            <Code className="h-8 w-8 text-cyan-600" />
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '27%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-indigo-600" />
            学习进度
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={learningData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip formatter={(value) => [`${value}%`, '完成度']} />
              <Bar dataKey="progress" radius={[0, 4, 4, 0]}>
                {learningData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-purple-600" />
            技能掌握
          </h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, '掌握度']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">最近活动</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-gray-500 mt-1">{activity.course} • {activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">推荐课程</h2>
          <Link to="/courses" className="text-indigo-600 font-medium hover:underline flex items-center">
            查看全部
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="p-6 hover:bg-gray-50 transition duration-200">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{course.title}</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration} 小时</span>
                    <span className="mx-2">•</span>
                    <span className={course.is_premium ? 'text-purple-600' : 'text-green-600'}>
                      {course.is_premium ? '高级' : '免费'}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/courses/${course.id}`}
                  className="flex-shrink-0 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200"
                >
                  查看
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
