import { api } from '../app/api';
import { TDeveloper } from 'screens/aboutProject';

const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllDevelopers: builder.query<TDeveloper[], void>({
      query: () => ({
        url: '/api/user/developers',
        method: 'GET',
      }),
      providesTags: ['users'],
      transformResponse: (response: TDeveloper[]) => response,
    }),
  }),
});

export const { useGetAllDevelopersQuery } = userApi;
