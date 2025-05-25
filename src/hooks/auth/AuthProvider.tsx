import { useState, type FC, type ReactNode } from 'react';
import { AuthContext } from './context';
import type { AuthRequestDto, AuthResponseDto } from '@/types';
import { AuthService } from '@/api';

const AuthContextProvider = AuthContext.Provider;

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [account, setAccount] = useState<AuthResponseDto | null>(null);

  const loginInAccount = async (data: AuthRequestDto) => {
    const response = await AuthService.loginFn(data);
    setAccount(response);
  };

  const contextValue = { account, loginInAccount };

  return (
    <AuthContextProvider value={contextValue}>{children}</AuthContextProvider>
  );
};
