import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { projects } from '../data/projects';
import { runPythonCode } from '../lib/pyodide';
import { saveProjectProgress, getProjectProgress, saveChatHistory, getChatHistory, ChatMessage } from '../lib/storage';
import { Play, RefreshCw, MessageCircle, Download, Upload, AlertCircle, CheckCircle, Code, FileText } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [plotData, setPlotData] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'chat'

  useEffect(() => {
    if (project) {
      // 加载保存的代码
      const savedProgress = getProjectProgress(project.id);
      setCode(savedProgress.code || project.starterCode);
      // 加载聊天记录
      const savedChat = getChatHistory(project.id);
      setChatMessages(savedChat);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">项目不存在</h3>
        <p className="text-gray-500 mb-4">请检查项目链接是否正确</p>
        <Link
          to="/"
          className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition duration-300"
        >
          返回首页
        </Link>
      </div>
    );
  }

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('');
    setPlotData(null);
    
    try {
      const result = await runPythonCode(code);
      if (result.success) {
        setOutput(result.result?.toString() || '代码执行成功！');
        if (result.plotData) {
          setPlotData(result.plotData);
        }
      } else {
        setOutput(`错误: ${result.error}`);
      }
    } catch (error) {
      setOutput(`执行错误: ${(error as Error).message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleGenerateData = async () => {
    setIsRunning(true);
    setOutput('');
    
    try {
      const result = await runPythonCode(project.datasetCode);
      if (result.success) {
        setOutput('数据集生成完成！' + (result.result?.toString() || ''));
      } else {
        setOutput(`错误: ${result.error}`);
      }
    } catch (error) {
      setOutput(`执行错误: ${(error as Error).message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const handleSaveCode = () => {
    saveProjectProgress(project.id, { code, completed: false });
    alert('代码已保存！');
  };

  const handleSubmitChat = async () => {
    if (!userInput.trim()) return;
    
    const newMessage: ChatMessage = {
      role: 'user',
      content: userInput,
      timestamp: Date.now()
    };
    
    const updatedMessages = [...chatMessages, newMessage];
    setChatMessages(updatedMessages);
    setUserInput('');
    setIsLoadingChat(true);
    
    try {
      // 这里应该调用Cloudflare Workers AI代理
      // 暂时模拟AI响应
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          role: 'assistant',
          content: '这是一个AI响应示例。在实际部署中，这里会调用真实的AI API。',
          timestamp: Date.now()
        };
        const finalMessages = [...updatedMessages, aiResponse];
        setChatMessages(finalMessages);
        saveChatHistory(project.id, finalMessages);
        setIsLoadingChat(false);
      }, 1000);
    } catch (error) {
      setIsLoadingChat(false);
      alert('AI请求失败，请稍后重试。');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* 项目基本信息 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty === 'beginner' ? '初级' : project.difficulty === 'intermediate' ? '中级' : '高级'}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                {project.category}
              </span>
            </div>
          </div>
          <Link
            to="/"
            className="flex items-center text-indigo-600 font-medium hover:underline"
          >
            返回项目列表
          </Link>
        </div>
      </div>

      {/* 任务列表 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">任务清单</h2>
        <ul className="space-y-2">
          {project.tasks.map((task, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 代码编辑器和运行区域 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-3 px-4 text-center font-medium transition duration-200 ${
              activeTab === 'code'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Code className="h-5 w-5" />
              <span>代码编辑器</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 py-3 px-4 text-center font-medium transition duration-200 ${
              activeTab === 'chat'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>AI陪练</span>
            </div>
          </button>
        </div>

        <div className="p-4">
          {activeTab === 'code' ? (
            <div className="space-y-4">
              {/* 编辑器工具栏 */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleGenerateData}
                  disabled={isRunning}
                  className="flex items-center space-x-1 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FileText className="h-4 w-4" />
                  <span>生成数据集</span>
                </button>
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="flex items-center space-x-1 px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="h-4 w-4" />
                  <span>{isRunning ? '运行中...' : '运行代码'}</span>
                </button>
                <button
                  onClick={handleSaveCode}
                  className="flex items-center space-x-1 px-4 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 transition duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>保存代码</span>
                </button>
              </div>

              {/* Monaco编辑器 */}
              <div className="h-[400px] border border-gray-200 rounded-md">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  value={code}
                  onChange={(value) => value && setCode(value)}
                  options={{
                    minimap: { enabled: true },
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    fontSize: 14,
                    tabSize: 4,
                  }}
                />
              </div>

              {/* 输出区域 */}
              <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
                <h3 className="font-medium mb-2">运行结果</h3>
                {plotData ? (
                  <div className="flex justify-center">
                    <img src={`data:image/png;base64,${plotData}`} alt="图表" className="max-w-full" />
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap text-sm">{output || '运行代码查看结果...'}</pre>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* 聊天记录 */}
              <div className="h-[400px] border border-gray-200 rounded-md p-4 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <MessageCircle className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                    <p>开始与AI教练对话吧！</p>
                    <p className="text-sm mt-2">你可以问关于代码的问题，或者寻求思路点拨</p>
                  </div>
                ) : (
                  chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === 'user'
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className="text-xs mt-1 text-gray-500">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
                {isLoadingChat && (
                  <div className="flex justify-start mb-4">
                    <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-800">
                      <p className="animate-pulse">AI正在思考...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 聊天输入 */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitChat()}
                  placeholder="输入你的问题..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleSubmitChat}
                  disabled={isLoadingChat || !userInput.trim()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  发送
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
