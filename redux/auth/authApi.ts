import { api } from '../app/api';
import { TUser, TNewUser, TCredentials } from 'screens/auth';
import { TPassword } from 'screens/auth';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<string, TCredentials>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: { message: string }) => response.message,
    }),
    logout: builder.query<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'PUT',
      }),
      providesTags: ['auth'],
    }),
    register: builder.mutation<TUser, TNewUser>({
      query: newUser => ({
        url: '/auth/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: TUser) => response,
    }),
    getCurrentUser: builder.query<TUser, null>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: ['auth'],
      transformResponse: (response: TUser) => response,
    }),
    resetPassword: builder.mutation<string, TPassword>({
      query: data => ({
        url: '/user/password-reset',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: string) => response,
    }),
    deleteCurrentAccount: builder.mutation<void, void>({
      query: () => ({
        url: '/user/delete',
        method: 'DELETE',
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLazyLogoutQuery,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useResetPasswordMutation,
  useDeleteCurrentAccountMutation,
} = authApi;
