import { api } from 'src/app';
import { TCompetence, TCompetenceFeed } from 'src/features/competence';

const competencesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllCompetences: builder.query<TCompetence[], number | string>({
			query: (userId) => ({
				url: `/api/competa/all/${userId}`,
				method: 'GET',
			}),
			providesTags: ['competences'],
			transformResponse: (response: TCompetence[]) => response,
		}),
		getCompetenceById: builder.query<TCompetence, number | string>({
			query: (competenceId) => ({
				url: `/api/competa/${competenceId}`,
				method: 'GET',
			}),
			providesTags: ['competences'],
			transformResponse: (response: TCompetence) => response,
		}),
		getPublicAndConfirmedCompetaByAllUsers: builder.query<TCompetenceFeed[], void>({
			query: () => ({
				url: `/api/competa/all/users`,
				method: 'GET',
			}),
			providesTags: ['competences'],
			transformResponse: (response: TCompetenceFeed[]) => response,
		}),
	}),
});

export const {
	useLazyGetAllCompetencesQuery,
	useGetCompetenceByIdQuery,
	useLazyGetCompetenceByIdQuery,
	useLazyGetPublicAndConfirmedCompetaByAllUsersQuery,
} = competencesApi;
