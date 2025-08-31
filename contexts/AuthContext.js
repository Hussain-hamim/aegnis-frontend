'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import {
  useCurrentUser,
  useLogin,
  useRegister,
  useLogout,
} from '@/hooks/useAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const {
    data: user,
    isLoading: userLoading,
    error,
    refetch,
  } = useCurrentUser();
  const loginMutation = useLogin();
  const registerMutation = useRegister();
  const logoutMutation = useLogout();
  const [isInitialized, setIsInitialized] = useState(false);

  // Wait for initial auth check to complete
  useEffect(() => {
    if (!userLoading) {
      setIsInitialized(true);
    }
  }, [userLoading]);

  const login = async (credentials) => {
    const result = await loginMutation.mutateAsync(credentials);
    await refetch();
    return result;
  };

  const loginWithGoogle = async () => {
    // Redirect to your backend's Google OAuth endpoint
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
    // window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  const register = async (userData) => {
    const result = await registerMutation.mutateAsync(userData);
    await refetch();
    return result;
  };

  const logout = () => {
    logoutMutation();
  };

  const value = {
    user,
    isLoading: userLoading || !isInitialized,
    error,
    login,
    loginWithGoogle,
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
