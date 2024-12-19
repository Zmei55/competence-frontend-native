import { RootState } from 'redux/store';
import { TProfile } from 'screens/profile';

export const selectProfile = (state: RootState): TProfile | null =>
  state.profile.profile;
export const selectProfileFormError = (state: RootState): string | null =>
  state.profile.errorMessage;
export const selectProfileAvatar = (state: RootState): string | null =>
  state.profile.profile ? state.profile.profile.avatarImageData : null;
