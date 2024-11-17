import { createSlice } from '@reduxjs/toolkit';
import { TAdministrationState } from '..';

const initialState: TAdministrationState = {
	administration: false,
	errorMessage: null,
};

const administrationSlice = createSlice({
	name: 'administration',
	initialState,
	reducers: {
		administration: (state) => {
			state.administration = true;
		},
		resetAdministration: (state) => {
			state.administration = initialState.administration;
		},
	},
	extraReducers: (builder) => {
		builder.addCase('auth/logoutSuccess', () => {
			return initialState;
		});
	},
});

export const { administration, resetAdministration } = administrationSlice.actions;

export default administrationSlice.reducer;
