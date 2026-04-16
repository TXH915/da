import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, FileText, BarChart2, Clock, Award, ChevronRight, PlayCircle, Lock } from 'lucide-react';
import { projects } from '@/data/projects';

const Practice: React.FC = () => {
  const [activeTab, setActiveTab] = useState('exercises');

  // 模拟练习数据
  const exercises = [
    { id: 1, title: 'Hello World', lesson: 'Python简介', difficulty: '简单', isPremium: false, completed: true },
    { id: 2, title: '变量练习', lesson: '变量和数据类型', difficulty: '简单', isPremium: false, completed: true },
    { id: 3, title: '控制流练习', lesson: '控制流语句', difficulty: '中等', isPremium: false, completed: false },
    { id: 4, title: '数据类型识别', lesson: '数据分析概述', difficulty: '简单', isPremium: false, completed: true },
    { id: 5, title: '数据清洗练习', lesson: '数据清洗', difficulty: '中等', isPremium: true, completed: false },
  ];

  // 模拟编码挑战
  const challenges = [
    { id: 1, title: 'Python基础挑战', difficulty: '简单', points: 10, timeLimit: '15分钟' },
    { id: 2, title: '数据分析挑战', difficulty: '中等', points: 20, timeLimit: '30分钟' },
    { id: 3, title: '数据可视化挑战', difficulty: '困难', points: 30, timeLimit: '45分钟' },
  ];

  // 从projects.ts导入实际项目数据
  // const projects = [
  //   { id: 1, title: '销售数据分析', description: '分析销售数据，识别销售趋势和客户行为', difficulty: '中等' },
  //   { id: 2, title: '市场调研分析', description: '分析市场调研数据，为产品决策提供依据', difficulty: '困难' },
  //   { id: 3, title: '客户细分分析', description: '使用聚类算法对客户进行细分', difficulty: '困难' },
  // ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">练习中心</h1>
      <p className="text-gray-600">通过互动练习、编码挑战和数据分析项目来巩固您的技能</p>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('exercises')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'exercises'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Code className="h-5 w-5" />
              <span>互动练习</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'challenges'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5" />
              <span>编码挑战</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'projects'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>数据分析项目</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'exercises' && (
            <div className="space-y-4">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      exercise.completed
                        ? 'bg-green-100 text-green-600'
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {exercise.completed ? (
                        <PlayCircle className="h-5 w-5" />
                      ) : (
                        <Code className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{exercise.title}</h3>
                      <p className="text-sm text-gray-500">{exercise.lesson}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          exercise.difficulty === '简单'
                            ? 'bg-green-100 text-green-800'
                            : exercise.difficulty === '中等'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {exercise.difficulty}
                        </span>
                        {exercise.isPremium && (
                          <span className="flex items-center text-sm text-purple-600">
                            <Lock className="h-3 w-3 mr-1" />
                            高级
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-md font-medium transition duration-200 ${
                    exercise.completed
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}>
                    {exercise.completed ? '已完成' : '开始练习'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold">{challenge.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        challenge.difficulty === '简单'
                          ? 'bg-green-100 text-green-800'
                          : challenge.difficulty === '中等'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>{challenge.points} 积分</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{challenge.timeLimit}</span>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200">
                      开始挑战
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 block"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-semibold">{project.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        project.difficulty === 'beginner'
                          ? 'bg-green-100 text-green-800'
                          : project.difficulty === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {project.difficulty === 'beginner' ? '初级' : project.difficulty === 'intermediate' ? '中级' : '高级'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{project.tasks.length} 个任务</span>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200">
                        开始项目
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;
