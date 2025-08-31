'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Brain,
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import GoogleLoginButton from '@/components/GoogleLoginButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login, loginLoading, error } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await login({ email, password });
      router.push('/dashboard');
    } catch (err) {
      // Error is handled by the context
    }
  };

  return (
    <div className='min-h-screen night-sky-bg'>
      <nav className='glass-nav sticky top-2 z-50 mx-4'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse-glow'>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <Brain className='w-5 h-5 text-white' />
                </Link>
              </div>
              <Link
                href='/'
                className='text-gray-300 hover:text-white transition-colors'
              >
                <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Aegnis
                </span>
              </Link>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
              <Link
                href='/'
                className='text-gray-300 hover:text-white transition-colors'
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='flex items-center justify-center p-4 py-20'>
        <Card className='w-full max-w-md glass-card border-white/20 backdrop-blur-sm'>
          <CardHeader className='text-center space-y-4'>
            <div className='flex justify-center mb-2'>
              <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg'>
                <Brain className='w-8 h-8 text-white' />
              </div>
            </div>
            <CardTitle className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Welcome Back
            </CardTitle>
            <CardDescription className='text-lg text-gray-300'>
              Sign in to your AI-powered productivity dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <GoogleLoginButton />

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-white/20' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-[#0A0A1A] px-2 text-gray-400'>
                  Or try login
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              {error && (
                <div className='bg-red-500/20 text-red-300 p-3 rounded-lg flex items-center gap-2 border border-red-500/30'>
                  <AlertCircle className='w-5 h-5' />
                  <span>{error.message}</span>
                </div>
              )}

              <div className='space-y-2'>
                <Label
                  htmlFor='email'
                  className='text-sm font-medium text-gray-300'
                >
                  Email
                </Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 h-4 w-4 text-gray-400' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-300'
                >
                  Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-4 w-4 text-gray-400' />
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400'
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className='h-4 w-4' />
                    ) : (
                      <Eye className='h-4 w-4' />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type='submit'
                className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg'
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className='ml-2 w-5 h-5' />
                  </>
                )}
              </Button>
            </form>

            <div className='text-center text-sm'>
              <span className='text-gray-400'>Don't have an account? </span>
              <Link
                href='/register'
                className='font-semibold text-purple-400 hover:text-purple-300 transition-colors'
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
