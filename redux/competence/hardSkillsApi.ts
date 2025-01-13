import { api } from '../app/api';
import { TCompetence } from '@/types/competence';

const hardSkillsApi = api.injectEndpoints({
  endpoints: builder => ({
    createHardSkillCompeta: builder.mutation<TCompetence, FormData>({
      query: formData => ({
        url: '/competa/hard-skill',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['competences'],
    }),
    updateHardSkillCompeta: builder.mutation<
      TCompetence,
      { competaId: number; formData: FormData }
    >({
      query: ({ competaId, formData }) => ({
        url: `/competa/hard-skill/${competaId}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['competences'],
    }),
  }),
});

export const {
  useCreateHardSkillCompetaMutation,
  useUpdateHardSkillCompetaMutation,
} = hardSkillsApi;
