import { RootState } from 'redux/store';

export const isAuthSelector = (state: RootState): boolean => state.auth.authChecked;
