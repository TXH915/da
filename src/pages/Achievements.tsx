import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy, FileText, ChevronRight, Download, Share2, Lock } from 'lucide-react';

const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('badges');

  // 模拟徽章数据
  const badges = [
    { id: 1, name: 'Python新手', description: '完成Python基础课程的第一个练习', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20beginner%20badge%20icon&image_size=square', earned: true, points: 10 },
    { id: 2, name: '数据分析入门', description: '完成数据分析入门课程', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20beginner%20badge%20icon&image_size=square', earned: true, points: 20 },
    { id: 3, name: '练习达人', description: '完成10个练习', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Practice%20master%20badge%20icon&image_size=square', earned: false, points: 30 },
    { id: 4, name: '课程完成者', description: '完成一门完整课程', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Course%20completer%20badge%20icon&image_size=square', earned: false, points: 50 },
    { id: 5, name: '数据可视化专家', description: '完成数据可视化课程', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20expert%20badge%20icon&image_size=square', earned: false, points: 40 },
    { id: 6, name: '商务分析大师', description: '完成商务数据分析课程', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20analysis%20master%20badge%20icon&image_size=square', earned: false, points: 60 },
  ];

  // 模拟证书数据
  const certificates = [
    { id: 1, name: 'Python基础编程', date: '2026-04-01', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20certificate%20template&image_size=landscape_16_9' },
    { id: 2, name: '数据分析入门', date: '2026-04-10', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analysis%20certificate%20template&image_size=landscape_16_9' },
  ];

  // 模拟排行榜数据
  const leaderboard = [
    { rank: 1, name: '张三', points: 150, badges: 8 },
    { rank: 2, name: '李四', points: 120, badges: 6 },
    { rank: 3, name: '王五', points: 90, badges: 5 },
    { rank: 4, name: '赵六', points: 80, badges: 4 },
    { rank: 5, name: '你', points: 70, badges: 3, isCurrentUser: true },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">成就系统</h1>
      <p className="text-gray-600">查看您的徽章、证书和排行榜排名</p>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('badges')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'badges'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Award className="h-5 w-5" />
              <span>徽章</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'certificates'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>证书</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex-1 py-4 px-6 text-center font-medium transition duration-200 ${
              activeTab === 'leaderboard'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>排行榜</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'badges' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">我的徽章</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">已获得: {badges.filter(b => b.earned).length}/{badges.length}</span>
                  <span className="text-indigo-600 font-semibold">总积分: {badges.filter(b => b.earned).reduce((sum, b) => sum + b.points, 0)}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`bg-white border rounded-lg shadow-sm overflow-hidden transition duration-200 ${
                      badge.earned
                        ? 'border-indigo-200 hover:shadow-md'
                        : 'border-gray-200 opacity-60'
                    }`}
                  >
                    <div className="p-4">
                      <div className="flex justify-center mb-4">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          badge.earned ? 'bg-indigo-100' : 'bg-gray-100'
                        }`}>
                          {badge.earned ? (
                            <img src={badge.image} alt={badge.name} className="w-16 h-16 object-contain" />
                          ) : (
                            <Lock className="h-10 w-10 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <h3 className="font-semibold text-center mb-2">{badge.name}</h3>
                      <p className="text-sm text-gray-500 text-center mb-3">{badge.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">{badge.points} 积分</span>
                        {badge.earned && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            已获得
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">我的证书</h2>
              <div className="space-y-6">
                {certificates.map((certificate) => (
                  <div key={certificate.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <div className="md:w-1/3">
                          <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="w-full h-40 object-cover rounded-md"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="font-semibold text-lg mb-2">{certificate.name}</h3>
                          <p className="text-gray-500 mb-4">颁发日期: {certificate.date}</p>
                          <div className="flex space-x-3">
                            <button className="flex items-center space-x-1 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200">
                              <Download className="h-4 w-4" />
                              <span>下载</span>
                            </button>
                            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition duration-200">
                              <Share2 className="h-4 w-4" />
                              <span>分享</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {certificates.length === 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
                    <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">暂无证书</h3>
                    <p className="text-gray-500 mb-4">完成课程后您将获得相应的证书</p>
                    <Link
                      to="/courses"
                      className="inline-flex items-center text-indigo-600 font-medium hover:underline"
                    >
                      浏览课程
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">排行榜</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 border-b">排名</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 border-b">用户</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 border-b">积分</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 border-b">徽章</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((user) => (
                      <tr
                        key={user.rank}
                        className={`${user.isCurrentUser ? 'bg-indigo-50' : 'hover:bg-gray-50'} transition duration-200`}
                      >
                        <td className="py-3 px-4 border-b">
                          <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-bold ${
                            user.rank === 1
                              ? 'bg-yellow-500 text-white'
                              : user.rank === 2
                              ? 'bg-gray-400 text-white'
                              : user.rank === 3
                              ? 'bg-amber-700 text-white'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {user.rank}
                          </span>
                        </td>
                        <td className="py-3 px-4 border-b font-medium">{user.name}</td>
                        <td className="py-3 px-4 border-b">{user.points}</td>
                        <td className="py-3 px-4 border-b">{user.badges}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
