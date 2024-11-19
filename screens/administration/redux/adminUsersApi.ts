import { api } from 'redux/app/api';
import {
  TAdminUser,
  TAdminUserEmailUpdate,
  TAdminUserNicknameUpdate,
  TAdminUserProfile,
  TAdminUserRolesUpdate,
  TAdminUserSearch,
  TAdminUserStatusInSchoolUpdate,
  TAdminUserDataUpdate,
} from '..';

const adminUsersApi = api.injectEndpoints({
  endpoints: builder => ({
    getUserProfilesBySearch: builder.mutation<
      TAdminUserProfile[],
      TAdminUserSearch
    >({
      query: search => ({
        url: '/api/admin/users',
        method: 'POST',
        body: search,
      }),
      invalidatesTags: ['administration'],
    }),
    getAdminUserById: builder.query<TAdminUser, number | string>({
      query: id => ({
        url: `/api/admin/users/${id}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['administration'],
      transformResponse: (response: TAdminUser) => response,
    }),
    updateAdminUserDataById: builder.mutation<
      TAdminUser,
      { userId: number | string; newUserData: TAdminUserDataUpdate }
    >({
      query: ({ userId, newUserData }) => ({
        url: `/api/admin/users/${userId}`,
        method: 'POST',
        body: newUserData,
      }),
      invalidatesTags: ['administration'],
    }),
    updateAdminUserEmailById: builder.mutation<
      TAdminUser,
      { userId: number | string; newUserEmail: TAdminUserEmailUpdate }
    >({
      query: ({ userId, newUserEmail }) => ({
        url: `/api/admin/users/${userId}/email`,
        method: 'POST',
        body: newUserEmail,
      }),
      invalidatesTags: ['administration'],
    }),
    updateAdminUserNicknameById: builder.mutation<
      TAdminUser,
      { userId: number | string; newUserNickname: TAdminUserNicknameUpdate }
    >({
      query: ({ userId, newUserNickname }) => ({
        url: `/api/admin/users/${userId}/nickname`,
        method: 'POST',
        body: newUserNickname,
      }),
      invalidatesTags: ['administration'],
    }),
    updateAdminUserStatusInSchoolById: builder.mutation<
      TAdminUser,
      {
        userId: number | string;
        newUserStatusInSchool: TAdminUserStatusInSchoolUpdate;
      }
    >({
      query: ({ userId, newUserStatusInSchool }) => ({
        url: `/api/admin/users/${userId}/status-in-school`,
        method: 'POST',
        body: newUserStatusInSchool,
      }),
      invalidatesTags: ['administration'],
    }),
    updateAdminUserRolesById: builder.mutation<
      TAdminUser,
      { userId: number | string; newUserRoles: TAdminUserRolesUpdate }
    >({
      query: ({ userId, newUserRoles }) => ({
        url: `/api/admin/users/${userId}/roles`,
        method: 'POST',
        body: newUserRoles,
      }),
      invalidatesTags: ['administration'],
    }),
    deleteAdminUserById: builder.mutation<void, number | string>({
      query: userId => ({
        url: `/api/admin/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['administration'],
    }),
  }),
});

export const {
  useLazyGetAdminUserByIdQuery,
  useGetUserProfilesBySearchMutation,
  useUpdateAdminUserDataByIdMutation,
  useUpdateAdminUserEmailByIdMutation,
  useUpdateAdminUserRolesByIdMutation,
  useUpdateAdminUserNicknameByIdMutation,
  useUpdateAdminUserStatusInSchoolByIdMutation,
  useDeleteAdminUserByIdMutation,
} = adminUsersApi;
