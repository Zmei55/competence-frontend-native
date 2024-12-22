import { api } from '../app/api';
import { TCompetence } from 'screens/competence';

const softSkillsApi = api.injectEndpoints({
  endpoints: builder => ({
    createSoftSkillCompeta: builder.mutation<TCompetence, FormData>({
      query: formData => ({
        url: '/competa/soft-skill',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['competences'],
      transformResponse: (response: TCompetence) => response,
    }),
    updateSoftSkillCompeta: builder.mutation<
      TCompetence,
      { competaId: number; formData: FormData }
    >({
      query: ({ competaId, formData }) => ({
        url: `/competa/soft-skill/${competaId}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['competences'],
      transformResponse: (response: TCompetence) => response,
    }),
  }),
});

export const {
  useCreateSoftSkillCompetaMutation,
  useUpdateSoftSkillCompetaMutation,
} = softSkillsApi;
