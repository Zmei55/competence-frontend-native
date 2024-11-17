import { api } from '../app/api';
import { TCompetence } from 'screens/competence';

const jobApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createJobCompeta: builder.mutation<TCompetence, FormData>({
			query: (formData) => ({
				url: '/api/competa/job-skill',
				method: 'POST',
				body: formData,
				credentials: 'include',
			}),
			invalidatesTags: ['competences'],
		}),
		updateJobCompeta: builder.mutation<TCompetence, { competaId: number; formData: FormData }>({
			query: ({ competaId, formData }) => ({
				url: `/api/competa/job-skill/${competaId}`,
				method: 'PUT',
				body: formData,
			}),
			invalidatesTags: ['competences'],
		}),
	}),
});

export const { useCreateJobCompetaMutation, useUpdateJobCompetaMutation } = jobApi;
