import { api } from '../app/api';
import { TCountry } from '@/types/profile';

const countriesApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCountries: builder.query<TCountry[], void>({
      query: () => ({
        url: '/country',
        method: 'GET',
      }),
      providesTags: ['countries'],
      transformResponse: (response: TCountry[]) => response,
    }),
  }),
});

export const { useLazyGetAllCountriesQuery } = countriesApi;
