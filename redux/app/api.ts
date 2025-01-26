import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://192.168.0.5:8080',
  credentials: 'include',
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 'FETCH_ERROR') {
    api.dispatch({ type: 'auth/logoutSuccess' });
  }
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: 'auth/token/refresh',
        method: 'POST',
      },
      api,
      extraOptions
    );

    if (refreshResult.data === null) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch({ type: 'auth/logoutSuccess' });
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'auth',
    'competences',
    'guarantee',
    'avatar',
    'countries',
    'profile',
    'industries',
    'jobTitles',
    'professions',
    'language',
    'skillLevel',
    'driverLicence',
    'educationType',
    'users',
    'administration',
    'feedback',
    'documents',
  ],
  endpoints: () => ({}),
  refetchOnReconnect: true,
});
