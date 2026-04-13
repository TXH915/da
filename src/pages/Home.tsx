import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Book, Code, BarChart2, Award, ArrowRight, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const { user, courses, fetchCourses, isLoading } = useStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // 模拟课程分类数据
  const categories = [
    { id: 1, name: '编程基础', icon: <Code className="h-8 w-8" />, count: 12 },
    { id: 2, name: '数据分析', icon: <BarChart2 className="h-8 w-8" />, count: 18 },
    { id: 3, name: '商务分析', icon: <Book className="h-8 w-8" />, count: 15 },
    { id: 4, name: '数据可视化', icon: <Award className="h-8 w-8" />, count: 10 },
  ];

  // 模拟学习进度数据
  const progressData = [
    { name: 'Python基础', progress: 75 },
    { name: '数据分析入门', progress: 45 },
    { name: '商务数据分析', progress: 20 },
  ];

  // 特色课程（前4个）
  const featuredCourses = courses.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 rounded-lg shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              掌握数据分析技能，开启职业新篇章
            </h1>
            <p className="text-lg mb-6 opacity-90">
              专为商务数据分析与应用专业学生设计的在线学习平台，提供完整的课程体系和互动式学习体验。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/courses"
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              >
                浏览课程
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              {user ? (
                <Link
                  to="/dashboard"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center justify-center"
                >
                  我的仪表盘
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center justify-center"
                >
                  免费注册
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <h3 className="text-indigo-600 font-bold mb-4">学习路径</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={progressData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => [`${value}%`, '完成度']} />
                  <Bar dataKey="progress" fill="#4361ee" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">课程分类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/courses"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-indigo-600 mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-500">{category.count} 门课程</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">特色课程</h2>
          <Link to="/courses" className="text-indigo-600 font-medium hover:underline flex items-center">
            查看全部
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // 加载状态
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            featuredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-2">{course.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-600">{course.instructor}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.is_premium ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {course.is_premium ? '高级' : '免费'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">{course.price === 0 ? '免费' : `¥${course.price}`}</span>
                    <span className="text-gray-500 text-sm">{course.duration} 小时</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Learning Progress */}
      {user && (
        <section className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">我的学习进度</h2>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-indigo-600 font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <Link
                to="/dashboard"
                className="inline-flex items-center text-indigo-600 font-medium hover:underline"
              >
                查看详细进度
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
