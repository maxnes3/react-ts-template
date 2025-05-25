export interface AuthRequestDto {
  phone: number;
  password: string;
}

export interface AuthResponseDto extends AuthRequestDto {
  id: string;
  name: string;
}
