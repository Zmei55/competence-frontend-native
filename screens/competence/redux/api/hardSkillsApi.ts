import { api } from 'src/app';
import { TCompetence } from 'src/features/competence';

const hardSkillsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createHardSkillCompeta: builder.mutation<TCompetence, FormData>({
			query: (formData) => ({
				url: '/api/competa/hard-skill',
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
				url: `/api/competa/hard-skill/${competaId}`,
				method: 'PUT',
				body: formData,
			}),
			invalidatesTags: ['competences'],
		}),
	}),
});

export const { useCreateHardSkillCompetaMutation, useUpdateHardSkillCompetaMutation } =
	hardSkillsApi;
