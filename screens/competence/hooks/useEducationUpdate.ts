import { useAppSelector, useAppDispatch, saveSnackbarError } from 'src/app';
import {
	useUpdateEducationCompetaMutation,
	useCompetaModalUpdate,
	useGetAllCompetasByUserId,
	TNewEducation,
} from '..';
import { currentUserIdSelector } from 'src/features/auth';
import { customErrorHandler } from 'shared';

export const useEducationUpdate = () => {
	const dispatch = useAppDispatch();
	const currentUserId = useAppSelector(currentUserIdSelector);
	const { handleGetAllCompetas, isCompetencesLoading } = useGetAllCompetasByUserId();
	const [updateCompetence, { isLoading }] = useUpdateEducationCompetaMutation();
	const { handleCompetaModalUpdate } = useCompetaModalUpdate();

	const isUpdatingCompetaLoading = isLoading || isCompetencesLoading;

	const handleEducationUpdate = async (competaId: number, data: TNewEducation) => {
		const newEducation = {
			competaType: data.competaType,
			title: data.title ? data.title.trim() : null,
			description: data.description ? data.description.trim() : null,
			competenceDate: data.competenceDate ? data.competenceDate : null,
			public: data.isPublic,
			includedInCV: data.isIncludedInCV,
			name: data.name ? data.name.trim() : null,
			educationTypeId: data.educationTypeId ? data.educationTypeId : null,
			professionId: data.professionId ? data.professionId : null,
			resultUrl: data.resultUrl ? data.resultUrl.trim() : null,
		};

		const formData = new FormData();
		formData.append('data', new Blob([JSON.stringify(newEducation)], { type: 'application/json' }));
		if (data.competaImage) formData.append('file', data.competaImage[0]);

		try {
			await updateCompetence({ competaId, formData }).unwrap();
			if (currentUserId) handleGetAllCompetas(currentUserId);
			handleCompetaModalUpdate();
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleEducationUpdate, isUpdatingCompetaLoading };
};
