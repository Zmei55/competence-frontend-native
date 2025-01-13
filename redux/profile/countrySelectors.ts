import { RootState } from '../store';
import { TCountry } from '@/types/profile';

export const countriesSelector = (state: RootState): TCountry[] | [] =>
  state.countries.countries;
