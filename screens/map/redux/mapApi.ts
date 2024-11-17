import { api } from 'src/app';
import { TUserDataMap } from 'src/features/map';

const mapApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsersMap: builder.query<TUserDataMap[], void>({
			query: () => ({
				url: '/api/user-profile/map',
				method: 'GET',
			}),
			providesTags: ['users'],
			transformResponse: (response: TUserDataMap[]) => response,
		}),
	}),
});

export const { useGetAllUsersMapQuery } = mapApi;
