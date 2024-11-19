import { api } from '../app/api';
import { TUser, TNewUser } from 'screens/auth/types';
import { TPassword } from 'screens/auth/types/passwordTypes';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<string, { email: string; password: string }>({
      query: (credentials: { email: string; password: string }) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: { message: string }) => response.message,
    }),
    logout: builder.query<void, void>({
      query: () => ({
        url: '/api/auth/logout',
        method: 'PUT',
      }),
      providesTags: ['auth'],
    }),
    register: builder.mutation<TUser, TNewUser>({
      query: newUser => ({
        url: '/api/auth/register',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: TUser) => response,
    }),
    getCurrentUser: builder.query<TUser, null>({
      query: () => ({
        url: '/api/user/me',
        method: 'GET',
      }),
      providesTags: ['auth'],
      transformResponse: (response: TUser) => response,
    }),
    resetPassword: builder.mutation<string, TPassword>({
      query: data => ({
        url: '/api/user/password-reset',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['auth'],
      transformResponse: (response: string) => response,
    }),
    deleteCurrentAccount: builder.mutation<void, void>({
      query: () => ({
        url: '/api/user/delete',
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
