import type { AuthRequestDto, AuthResponseDto } from '@/types';
import { createContext } from 'react';

interface Context {
  account: AuthResponseDto | null;
  loginInAccount: (data: AuthRequestDto) => void;
}

export const AuthContext = createContext({} as Context);
