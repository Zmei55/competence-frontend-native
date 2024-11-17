import { api } from 'redux/app/api';

const sharedApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getImageById: builder.query<{ imageBase64: string }, number>({
			query: (imageId) => ({
				url: `api/image/original-size/${imageId}`,
				method: 'GET',
			}),
			providesTags: ['competences'],
		}),
	}),
});

export const { useLazyGetImageByIdQuery } = sharedApi;
