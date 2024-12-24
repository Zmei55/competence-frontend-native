import { TProfile } from 'screens/profile/types';

export type TUserDataMap = Pick<
  TProfile,
  'id' | 'nickName' | 'firstName' | 'lastName' | 'specialty' | 'statusInSchool'
> & {
  location: string;
  avatarImage: string | null;
};

export type TMarkerData = Pick<
  TProfile,
  'id' | 'nickName' | 'firstName' | 'lastName' | 'specialty' | 'statusInSchool'
> & {
  lat: number;
  lng: number;
  avatarImage: string | null;
};
