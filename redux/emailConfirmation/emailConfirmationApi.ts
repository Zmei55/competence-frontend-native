import { api } from '../app/api';

const emailConfirmationApi = api.injectEndpoints({
  endpoints: builder => ({
    emailConfirmation: builder.query<string, string>({
      query: token => ({
        url: `/api/user/email-confirmation/${token}`,
        method: 'GET',
      }),
      providesTags: ['users'],
    }),
  }),
});

export const { useLazyEmailConfirmationQuery } = emailConfirmationApi;
