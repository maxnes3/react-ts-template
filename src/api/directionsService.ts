import type {
  DirectionResponseDto,
  DirectionWithQualificationAndProfile,
  ProfileResponseDto,
  QualificationResponseDto,
} from '@/types/directions';
import { axiosConfig } from './axiosConfig';

export const DirectionsService = {
  getAllDirectionsFn: async (): Promise<
    DirectionWithQualificationAndProfile[]
  > => {
    const [directions, qualifications, profiles] = await Promise.all([
      axiosConfig.get<DirectionResponseDto[]>('/directions'),
      axiosConfig.get<QualificationResponseDto[]>('/qualifications'),
      axiosConfig.get<ProfileResponseDto[]>('/profiles'),
    ]);

    const qualificationsMap = new Map(
      qualifications.data.map((q) => [q.id, q.name]),
    );
    const profilesMap = new Map(profiles.data.map((p) => [p.id, p.name]));

    return directions.data.map((direction) => ({
      ...direction,
      qualification: qualificationsMap.get(direction.qualification_id)!,
      profile: profilesMap.get(direction.profile_id)!,
    }));
  },
};
