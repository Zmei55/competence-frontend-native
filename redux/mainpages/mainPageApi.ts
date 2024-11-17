import { api } from 'src/app';
import { TDeveloper } from '..';

const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
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
