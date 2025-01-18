import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCountry, TCountryState } from '@/types/profile';

import { countries } from '@/constants/data/countries';

const initialState: TCountryState = {
  countries: countries, // null
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    saveCountries: (state, action: PayloadAction<TCountry[]>) => {
      state.countries = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('auth/logoutSuccess', () => {
      return initialState;
    });
  },
});

export const { saveCountries } = countrySlice.actions;

export default countrySlice.reducer;
