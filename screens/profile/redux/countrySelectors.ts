import { RootState } from 'src/app/redux';
import { TCountry } from '../types';

export const selectCountries = (state: RootState): TCountry[] | [] => state.countries.countries;
