'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Menu,
  X,
  User,
  LogOut,
  Dashboard,
  Settings,
  Bell,
} from 'lucide-react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, logout, isAuthenticated } = useAuthContext();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='glass-nav sticky top-2 z-50 mx-4'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse-glow'>
              <Link href='/'>
                <Brain className='w-5 h-5 text-white' />
              </Link>
            </div>
            <Link href='/'>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Aegnis
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {isAuthenticated ? (
              <>
                <Link
                  href='/dashboard'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Dashboard
                </Link>
                <Link
                  href='/profile'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Profile
                </Link>
                <Link
                  href='/settings'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Settings
                </Link>

                <div className='flex items-center space-x-4'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-gray-300 hover:text-white hover:bg-white/10'
                  >
                    <Bell className='w-5 h-5' />
                  </Button>

                  <div className='flex items-center space-x-2'>
                    <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                      <User className='w-4 h-4 text-white' />
                    </div>
                    <span className='text-gray-300 text-sm'>
                      {user?.username}
                    </span>
                  </div>

                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-gray-300 hover:text-white hover:bg-white/10'
                    onClick={handleLogout}
                    title='Logout'
                  >
                    <LogOut className='w-5 h-5' />
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href='#features'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Features
                </Link>
                <Link
                  href='#testimonials'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Testimonials
                </Link>
                <Link
                  href='#demo'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  Demo
                </Link>
                <Link href='/login'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm'
                  >
                    Log In
                  </Button>
                </Link>
                <Link href='/register'>
                  <Button
                    size='sm'
                    className='bg-white text-gray-900 hover:bg-gray-100 font-medium'
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-300 hover:text-white hover:bg-white/10'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden glass-card border-white/10 mt-4 rounded-lg p-4 backdrop-blur-sm'>
            {isAuthenticated ? (
              <div className='space-y-4'>
                <div className='flex items-center space-x-3 pb-4 border-b border-white/10'>
                  <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center'>
                    <User className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-medium'>{user?.username}</p>
                    <p className='text-gray-400 text-sm'>{user?.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleNavigation('/dashboard')}
                  className='w-full flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                >
                  <Dashboard className='w-5 h-5' />
                  <span>Dashboard</span>
                </button>

                <button
                  onClick={() => handleNavigation('/profile')}
                  className='w-full flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                >
                  <User className='w-5 h-5' />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => handleNavigation('/settings')}
                  className='w-full flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                >
                  <Settings className='w-5 h-5' />
                  <span>Settings</span>
                </button>

                <button
                  onClick={handleLogout}
                  className='w-full flex items-center space-x-3 p-3 text-red-300 hover:text-red-100 hover:bg-red-500/10 rounded-lg transition-colors'
                >
                  <LogOut className='w-5 h-5' />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className='space-y-4'>
                <Link
                  href='#features'
                  className='block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href='#testimonials'
                  className='block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href='#demo'
                  className='block p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo
                </Link>

                <div className='pt-4 border-t border-white/10 space-y-3'>
                  <Link href='/login' className='w-full block'>
                    <Button
                      variant='outline'
                      className='w-full border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link href='/register' className='w-full block'>
                    <Button
                      className='w-full bg-white text-gray-900 hover:bg-gray-100 font-medium'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
