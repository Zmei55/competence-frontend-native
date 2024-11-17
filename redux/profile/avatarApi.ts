import { api } from 'src/app';
import { TAvatar } from '..';

const avatarApi = api.injectEndpoints({
	endpoints: (builder) => ({
		uploadAvatar: builder.mutation<TAvatar, FormData>({
			query: (avatar) => ({
				url: 'api/user-profile/avatar',
				method: 'POST',
				body: avatar,
			}),
			invalidatesTags: ['avatar'],
			transformResponse: (response: TAvatar) => response,
		}),
	}),
});

export const { useUploadAvatarMutation } = avatarApi;
