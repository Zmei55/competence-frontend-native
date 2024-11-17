import { useAppSelector, useAppDispatch, saveSnackbarError } from 'src/app';
import {
	useUpdateHardSkillCompetaMutation,
	useCompetaModalUpdate,
	useGetAllCompetasByUserId,
	TNewHardSkill,
} from '..';
import { currentUserIdSelector } from 'src/features/auth';
import { customErrorHandler } from 'shared';

export const useHardSkillUpdate = () => {
	const dispatch = useAppDispatch();
	const currentUserId = useAppSelector(currentUserIdSelector);
	const { handleGetAllCompetas, isCompetencesLoading } = useGetAllCompetasByUserId();
	const [updateHardSkill, { isLoading }] = useUpdateHardSkillCompetaMutation();
	const { handleCompetaModalUpdate } = useCompetaModalUpdate();

	const isUpdatingCompetaLoading = isLoading || isCompetencesLoading;

	const handleHardSkillUpdate = async (competaId: number, data: TNewHardSkill) => {
		const newHardSkill = {
			competaType: data.competaType,
			title: data.title ? data.title.trim() : null,
			description: data.description ? data.description.trim() : null,
			competenceDate: data.competenceDate ? data.competenceDate : null,
			public: data.isPublic,
			includedInCV: data.isIncludedInCV,
			industryId: data.industryId ? data.industryId : null,
			skillLevelId: data.skillLevelId ? data.skillLevelId : null,
			resultUrl: data.resultUrl ? data.resultUrl.trim() : null,
			languageId: data.languageId ? data.languageId : null,
			languageLevelId: data.languageLevelId ? data.languageLevelId : null,
			driverLicenceId: data.driverLicenceId ? data.driverLicenceId : null,
		};

		const formData = new FormData();
		formData.append('data', new Blob([JSON.stringify(newHardSkill)], { type: 'application/json' }));
		if (data.competaImage) formData.append('file', data.competaImage[0]);

		try {
			await updateHardSkill({ competaId, formData }).unwrap();
			if (currentUserId) handleGetAllCompetas(currentUserId);
			handleCompetaModalUpdate();
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleHardSkillUpdate, isUpdatingCompetaLoading };
};
