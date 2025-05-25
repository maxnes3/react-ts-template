import type { AuthRequestDto, AuthResponseDto } from '@/types';
import { axiosConfig } from './axiosConfig';

export const AuthService = {
  loginFn: async (data: AuthRequestDto): Promise<AuthResponseDto | null> => {
    const { phone, password } = data;
    const response = await axiosConfig.get<AuthResponseDto[]>('/users', {
      params: {
        phone,
        password,
      },
    });
    return response.data[0] ?? null;
  },
};
