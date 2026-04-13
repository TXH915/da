import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '@/store';
import { ChevronRight, Clock, User, BookOpen, CheckCircle, Lock, PlayCircle } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || '0');
  const { currentCourse, lessons, fetchCourseById, fetchLessons, isLoading, user } = useStore();

  useEffect(() => {
    if (courseId) {
      fetchCourseById(courseId);
      fetchLessons(courseId);
    }
  }, [courseId, fetchCourseById, fetchLessons]);

  // 模拟课程进度
  const courseProgress = 30;

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-40 bg-gray-200 rounded-lg"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!currentCourse) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">课程不存在</h3>
        <p className="text-gray-500 mb-4">请检查课程链接是否正确</p>
        <Link
          to="/courses"
          className="inline-flex items-center text-indigo-600 font-medium hover:underline"
        >
          返回课程列表
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Course Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64">
          <img
            src={currentCourse.image_url}
            alt={currentCourse.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                currentCourse.is_premium ? 'bg-purple-500' : 'bg-green-500'
              }`}>
                {currentCourse.is_premium ? '高级课程' : '免费课程'}
              </span>
              <h1 className="text-2xl font-bold mb-2">{currentCourse.title}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{currentCourse.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{currentCourse.duration} 小时</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{lessons.length} 章节</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Progress */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">课程进度</span>
            <span className="text-indigo-600 font-semibold">{courseProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Course Description */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">课程介绍</h2>
          <p className="text-gray-600 mb-4">{currentCourse.description}</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{currentCourse.category}</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{currentCourse.level}</span>
          </div>
        </div>
      </div>

      {/* Course Lessons */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">课程章节</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="p-6 hover:bg-gray-50 transition duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    {lesson.order_index}
                  </div>
                  <div>
                    <h3 className="font-medium">{lesson.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{lesson.content?.substring(0, 100)}...</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {lesson.is_premium && !user && (
                    <Lock className="h-5 w-5 text-gray-400" />
                  )}
                  <button className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                    {lesson.video_url ? (
                      <>
                        <PlayCircle className="h-5 w-5 mr-1" />
                        观看
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-5 w-5 mr-1" />
                        阅读
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <span className="text-gray-500 text-sm">课程价格</span>
            <p className="text-2xl font-bold text-indigo-600">
              {currentCourse.price === 0 ? '免费' : `¥${currentCourse.price}`}
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition duration-200">
              加入收藏
            </button>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200">
              开始学习
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
