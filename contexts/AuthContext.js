'use client';

import { createContext, useContext } from 'react';
import {
  useCurrentUser,
  useLogin,
  useRegister,
  useLogout,
} from '@/hooks/useAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data: user, isLoading, error } = useCurrentUser();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const logout = useLogout();

  const login = async (credentials) => {
    return loginMutation.mutateAsync(credentials);
  };

  const register = async (userData) => {
    return registerMutation.mutateAsync(userData);
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loginLoading: loginMutation.isPending,
    registerLoading: registerMutation.isPending,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
