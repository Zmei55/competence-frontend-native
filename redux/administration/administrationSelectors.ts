import { RootState } from 'redux/store';

export const administrationSelector = (state: RootState): boolean =>
	state.administration.administration;
