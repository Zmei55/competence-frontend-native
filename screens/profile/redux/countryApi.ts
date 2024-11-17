import { api } from 'src/app';
import { TCountry } from '../types';

const countriesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllCountries: builder.query<TCountry[], void>({
			query: () => ({
				url: '/api/country',
				method: 'GET',
			}),
			providesTags: ['countries'],
			transformResponse: (response: TCountry[]) => response,
		}),
	}),
});

export const { useLazyGetAllCountriesQuery } = countriesApi;
