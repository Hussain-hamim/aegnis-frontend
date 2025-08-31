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
  User,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationError, setValidationError] = useState('');

  const { register, registerLoading, error } = useAuthContext();
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setValidationError('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setValidationError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return;
    }

    try {
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
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
              Create Account
            </CardTitle>
            <CardDescription className='text-lg text-gray-300'>
              Join Aegnis and boost your productivity with AI
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              {(error || validationError) && (
                <div className='bg-red-500/20 text-red-300 p-3 rounded-lg flex items-center gap-2 border border-red-500/30'>
                  <AlertCircle className='w-5 h-5' />
                  <span>{error?.message || validationError}</span>
                </div>
              )}

              <div className='space-y-2'>
                <Label
                  htmlFor='username'
                  className='text-sm font-medium text-gray-300'
                >
                  Username
                </Label>
                <div className='relative'>
                  <User className='absolute left-3 top-3 h-4 w-4 text-gray-400' />
                  <Input
                    id='username'
                    type='text'
                    placeholder='Choose a username'
                    value={formData.username}
                    onChange={handleChange}
                    required
                    minLength={3}
                    className='pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400'
                  />
                </div>
              </div>

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
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder='Create a password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
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

              <div className='space-y-2'>
                <Label
                  htmlFor='confirmPassword'
                  className='text-sm font-medium text-gray-300'
                >
                  Confirm Password
                </Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-4 w-4 text-gray-400' />
                  <Input
                    id='confirmPassword'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className='pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400'
                  />
                  <Button
                    type='button'
                    variant='ghost'
                    size='icon'
                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-400 hover:text-white'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
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
                disabled={registerLoading}
              >
                {registerLoading ? (
                  <>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className='ml-2 w-5 h-5' />
                  </>
                )}
              </Button>
            </form>

            <div className='text-center text-sm'>
              <span className='text-gray-400'>Already have an account? </span>
              <Link
                href='/login'
                className='font-semibold text-purple-400 hover:text-purple-300 transition-colors'
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
