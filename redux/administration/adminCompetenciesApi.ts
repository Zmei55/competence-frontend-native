import { api } from '../app/api';
import { TAdminCompetence } from '@/types/administration';
import { TCompetence } from '@/types/competence';

const adminCompetenciesApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCompetenciesByUserId: builder.query<
      TAdminCompetence[],
      number | string
    >({
      query: id => ({
        url: `/admin/competencies/${id}/competencies`,
        method: 'GET',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['administration'],
      transformResponse: (response: TAdminCompetence[]) => response,
    }),
    updateAdminCompetenceByUserId: builder.mutation<
      TCompetence,
      { competaId: number; formData: FormData }
    >({
      query: ({ competaId, formData }) => ({
        url: `/admin/competencies/${competaId}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['administration'],
    }),
  }),
});

export const {
  useLazyGetAllCompetenciesByUserIdQuery,
  useUpdateAdminCompetenceByUserIdMutation,
} = adminCompetenciesApi;
