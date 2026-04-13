import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../store';
import { Menu, X, User, Book, Code, Award, Home, LogOut } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, signOut } = useStore();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <h1 className="text-xl font-bold">DataLearn</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`flex items-center space-x-1 ${location.pathname === '/' ? 'font-bold' : ''}`}>
              <Home className="h-5 w-5" />
              <span>首页</span>
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className={`flex items-center space-x-1 ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}>
                  <User className="h-5 w-5" />
                  <span>仪表盘</span>
                </Link>
                <Link to="/practice" className={`flex items-center space-x-1 ${location.pathname === '/practice' ? 'font-bold' : ''}`}>
                  <Code className="h-5 w-5" />
                  <span>练习中心</span>
                </Link>
                <Link to="/achievements" className={`flex items-center space-x-1 ${location.pathname === '/achievements' ? 'font-bold' : ''}`}>
                  <Award className="h-5 w-5" />
                  <span>成就系统</span>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-white hover:text-gray-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>退出</span>
                </button>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
                  登录
                </Link>
                <Link to="/register" className="bg-transparent border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-indigo-600">
                  注册
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-700 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`flex items-center space-x-2 ${location.pathname === '/' ? 'font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <Home className="h-5 w-5" />
                <span>首页</span>
              </Link>
              {user && (
                <>
                  <Link to="/dashboard" className={`flex items-center space-x-2 ${location.pathname === '/dashboard' ? 'font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                    <User className="h-5 w-5" />
                    <span>仪表盘</span>
                  </Link>
                  <Link to="/practice" className={`flex items-center space-x-2 ${location.pathname === '/practice' ? 'font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                    <Code className="h-5 w-5" />
                    <span>练习中心</span>
                  </Link>
                  <Link to="/achievements" className={`flex items-center space-x-2 ${location.pathname === '/achievements' ? 'font-bold' : ''}`} onClick={() => setIsMenuOpen(false)}>
                    <Award className="h-5 w-5" />
                    <span>成就系统</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 text-white hover:text-gray-200"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>退出</span>
                  </button>
                </>
              )}
              {!user && (
                <>
                  <Link to="/login" className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-100 text-center" onClick={() => setIsMenuOpen(false)}>
                    登录
                  </Link>
                  <Link to="/register" className="bg-transparent border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-indigo-600 text-center" onClick={() => setIsMenuOpen(false)}>
                    注册
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Book className="h-6 w-6" />
              <h2 className="text-xl font-bold">DataLearn</h2>
            </div>
            <div className="text-sm text-gray-400">
              © 2026 DataLearn. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
