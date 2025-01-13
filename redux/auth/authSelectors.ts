import { RootState } from '../store';
import { TUser } from '@/types/auth';

export const isAuthSelector = (state: RootState): boolean =>
  state.auth.authChecked;
export const isAuthLoadingSelector = (state: RootState): boolean =>
  state.auth.isAuthLoading;
export const userSelector = (state: RootState): TUser | null => state.auth.user;
export const loginFormErrorSelector = (state: RootState): string | null =>
  state.auth.loginErrorMessage;
export const registerFormErrorSelector = (state: RootState): string | null =>
  state.auth.registerErrorMessage;
export const currentUserIdSelector = (
  state: RootState
): number | string | undefined => state.auth.user?.id;
