import { RootState } from 'redux/store';
import { TCountry } from 'screens/profile';

export const selectCountries = (state: RootState): TCountry[] | [] =>
  state.countries.countries;
