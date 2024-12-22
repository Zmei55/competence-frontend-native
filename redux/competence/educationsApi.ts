import { api } from '../app/api';
import { TCompetence } from 'screens/competence';

const educationsApi = api.injectEndpoints({
  endpoints: builder => ({
    createEducationCompeta: builder.mutation<TCompetence, FormData>({
      query: formData => ({
        url: '/competa/education',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['competences'],
      transformResponse: (response: TCompetence) => response,
    }),
    updateEducationCompeta: builder.mutation<
      TCompetence,
      { competaId: number; formData: FormData }
    >({
      query: ({ competaId, formData }) => ({
        url: `/competa/education/${competaId}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['competences'],
      transformResponse: (response: TCompetence) => response,
    }),
  }),
});

export const {
  useCreateEducationCompetaMutation,
  useUpdateEducationCompetaMutation,
} = educationsApi;
