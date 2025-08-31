'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/AuthContext';

export default function AuthSuccess() {
  const router = useRouter();
  const { login } = useAuthContext();

  useEffect(() => {
    const handleOAuthSuccess = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        // Store the token
        localStorage.setItem('authToken', token);

        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        // No token found, redirect to login
        router.push('/login');
      }
    };

    handleOAuthSuccess();
  }, [router]);

  return (
    <div className='min-h-screen night-sky-bg flex items-center justify-center'>
      <div className='text-center'>
        <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse'>
          <svg
            className='w-8 h-8 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 10V3L4 14h7v7l9-11h-7z'
            />
          </svg>
        </div>
        <h2 className='text-white text-xl mb-2'>
          Completing authentication...
        </h2>
        <p className='text-gray-300'>Please wait while we log you in.</p>
      </div>
    </div>
  );
}
