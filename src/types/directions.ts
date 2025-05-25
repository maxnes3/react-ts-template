export interface QualificationResponseDto {
  id: string;
  code: string;
}

export interface ProfileResponseDto {
  id: string;
  code: string;
}

export interface DirectionResponseDto {
  id: string;
  code: string;
  name: string;
  qualification: QualificationResponseDto;
  profile: ProfileResponseDto;
}
