import { api } from '../app/api';
import {
  TCompetence,
  TCompetenceFeed,
  TCompetenceForList,
} from '@/types/competence';

const competencesApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCompetences: builder.query<TCompetenceForList[], number | string>({
      query: userId => ({
        url: `/competa/all/${userId}`,
        method: 'GET',
      }),
      providesTags: ['competences'],
      transformResponse: (response: TCompetence[]) => response,
    }),
    getCompetenceById: builder.query<TCompetence, number | string>({
      query: competenceId => ({
        url: `/competa/${competenceId}`,
        method: 'GET',
      }),
      providesTags: ['competences'],
      transformResponse: (response: TCompetence) => response,
    }),
    getPublicAndConfirmedCompetaByAllUsers: builder.query<
      TCompetenceFeed[],
      void
    >({
      query: () => ({
        url: `/competa/all/users`,
        method: 'GET',
      }),
      providesTags: ['competences'],
      transformResponse: (response: TCompetenceFeed[]) => response,
    }),
    deleteCompetenceById: builder.mutation<void, number>({
      query: competenceId => ({
        url: `/api/competa/${competenceId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLazyGetAllCompetencesQuery,
  useGetCompetenceByIdQuery,
  useLazyGetCompetenceByIdQuery,
  useLazyGetPublicAndConfirmedCompetaByAllUsersQuery,
  useDeleteCompetenceByIdMutation,
} = competencesApi;
