import { RootState } from 'src/app/redux';

export const administrationSelector = (state: RootState): boolean =>
	state.administration.administration;
