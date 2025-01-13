import { api } from '../app/api';
import { IProfileFormValues, TProfile, TProfileName } from '@/types/profile';

const profileApi = api.injectEndpoints({
  endpoints: builder => ({
    getCurrentUserProfile: builder.query<TProfile, void>({
      query: () => ({
        url: '/user-profile',
        method: 'GET',
      }),
      providesTags: ['profile'],
      transformResponse: (response: TProfile) => response,
    }),
    getUserProfileById: builder.query<TProfile, string | number>({
      query: id => ({
        url: `/user-profile/${id}`,
        method: 'GET',
      }),
      providesTags: ['profile'],
      transformResponse: (response: TProfile) => response,
    }),
    updateUserProfile: builder.mutation<TProfile, IProfileFormValues>({
      query: profile => ({
        url: '/user-profile',
        method: 'PUT',
        body: profile,
      }),
      invalidatesTags: ['profile'],
      transformResponse: (response: TProfile) => response,
    }),
    getFirstNameAndLastNameAllUserProfiles: builder.query<TProfileName[], void>(
      {
        query: () => ({
          url: '/user-profile/name/all',
          method: 'GET',
        }),
        providesTags: ['profile'],
        transformResponse: (response: TProfileName[]) => response,
      }
    ),
  }),
});

export const {
  useLazyGetCurrentUserProfileQuery,
  useLazyGetUserProfileByIdQuery,
  useUpdateUserProfileMutation,
  useLazyGetFirstNameAndLastNameAllUserProfilesQuery,
} = profileApi;
