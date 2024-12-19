import { TProfile } from 'screens/profile';

export type TUser = Pick<
  TProfile,
  | 'id'
  | 'nickName'
  | 'firstName'
  | 'lastName'
  | 'specialty'
  | 'statusInSchool'
  | 'location'
  | 'avatarImageData'
> & {
  userId: number | string;
  avatarFileName: string | null;
  avatarId: number | null;
};

export type TUserState = {
  users: TUser[] | [];
  errorMessage: string | null;
};

export type TDeveloper = Pick<
  TProfile,
  'id' | 'firstName' | 'lastName' | 'statusInSchool'
> & {
  avatarImage: string | null;
  userProfileId: number | string;
  descriptions: string;
};
