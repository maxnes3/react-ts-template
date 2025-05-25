export interface QualificationResponseDto {
  id: string;
  name: string;
}

export interface ProfileResponseDto {
  id: string;
  name: string;
}

export interface DirectionResponseDto {
  id: string;
  code: string;
  name: string;
  qualification_id: string;
  profile_id: string;
}

export interface DirectionWithQualificationAndProfile {
  id: string;
  code: string;
  name: string;
  qualification: string;
  profile: string;
}
