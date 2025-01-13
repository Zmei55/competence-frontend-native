import { api } from '../app/api';
import { TCompetence } from '@/types/competence';

const jobApi = api.injectEndpoints({
  endpoints: builder => ({
    createJobCompeta: builder.mutation<TCompetence, FormData>({
      query: formData => ({
        url: '/competa/job-skill',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['competences'],
    }),
    updateJobCompeta: builder.mutation<
      TCompetence,
      { competaId: number; formData: FormData }
    >({
      query: ({ competaId, formData }) => ({
        url: `/competa/job-skill/${competaId}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['competences'],
    }),
  }),
});

export const { useCreateJobCompetaMutation, useUpdateJobCompetaMutation } =
  jobApi;
