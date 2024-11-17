import { RootState } from 'src/app/redux';
import { TProfile } from 'src/features/profile';

export const selectProfile = (state: RootState): TProfile | null => state.profile.profile;
export const selectProfileFormError = (state: RootState): string | null =>
	state.profile.errorMessage;
export const selectProfileAvatar = (state: RootState): string | null =>
	state.profile.profile ? state.profile.profile.avatarImageData : null;
