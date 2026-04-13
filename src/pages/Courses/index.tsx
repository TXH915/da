import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '@/store';
import { ChevronRight, Filter, Search } from 'lucide-react';

const Courses: React.FC = () => {
  const { courses, fetchCourses, isLoading } = useStore();
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // 过滤和搜索课程
  const filteredCourses = courses.filter((course) => {
    const matchesFilter = filter === 'all' || 
                         (filter === 'free' && !course.is_premium) ||
                         (filter === 'premium' && course.is_premium);
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
                         course.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-gray-800">所有课程</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="搜索课程..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="relative w-full sm:w-48">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="all">全部课程</option>
              <option value="free">免费课程</option>
              <option value="premium">高级课程</option>
            </select>
            <Filter className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {isLoading ? (
        // 加载状态
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
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
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">没有找到课程</h3>
          <p className="text-gray-500 mb-4">尝试调整搜索条件或过滤器</p>
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 font-medium hover:underline"
          >
            返回首页
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Courses;
