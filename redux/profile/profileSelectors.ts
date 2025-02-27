import { RootState } from '../store';
import { TProfile } from '@/types/profile';

export const profileSelector = (state: RootState): TProfile | null =>
  state.profile.profile;
export const profileFormErrorSelector = (state: RootState): string | null =>
  state.profile.errorMessage;
export const profileAvatarSelector = (state: RootState): string | null =>
  state.profile.profile ? state.profile.profile.avatarImageData : null;
