'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '@/lib/auth';

// Helper function to safely access localStorage
const getAuthToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  }
  return null;
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', data.token);
      }
      queryClient.setQueryData(['currentUser'], data.user);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', data.token);
      }
      queryClient.setQueryData(['currentUser'], data.user);
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: authService.getCurrentUser,
    enabled: !!getAuthToken(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    queryClient.setQueryData(['currentUser'], null);
    queryClient.removeQueries(['currentUser']);
  };
};
