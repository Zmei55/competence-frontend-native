import { RootState } from '../store';

export const administrationSelector = (state: RootState): boolean =>
  state.administration.administration;
