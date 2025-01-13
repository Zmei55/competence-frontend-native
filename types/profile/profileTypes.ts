import { Dayjs } from 'dayjs';

export type TProfile = {
  id: number | string;
  email: string;
  nickName: string;
  firstName: string | null;
  lastName: string | null;
  avatarId: number | null;
  phone: string | null;
  dateOfBirth: Dayjs | null;
  dateCreate: Dayjs;
  profession: number | null;
  skillLevelId: number | null;
  public: boolean;
  residence: number | null;
  readyToMove: boolean;
  avatarImageData: string | null;
  address: Address | null;
  otherAddress: Address | null;
  location: string | null;
  personalRating: number | null;
  roles: string[];
};

type Address = {
  country?: number;
  postcode?: string;
  city?: string;
  address?: string;
};

export type TProfileState = {
  profile: TProfile | null;
  errorMessage: string | null;
  isLoading: boolean;
};

export type TProfileName = {
  firstName: string;
  lastName: string;
};

export interface IProfileFormValues {
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: Dayjs;
  profession?: string;
  skillLevelId?: string;
  public?: boolean;
  residence?: string;
  readyToMove?: boolean;
  address?: {
    country?: string;
    postcode?: string;
    city?: string;
    address?: string;
  } | null;
  otherAddress?: {
    country?: string;
    postcode?: string;
    city?: string;
    address?: string;
  } | null;
  location?: string;
}
