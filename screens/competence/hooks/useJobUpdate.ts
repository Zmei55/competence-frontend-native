import { useAppSelector, useAppDispatch, saveSnackbarError } from 'src/app';
import {
	useUpdateJobCompetaMutation,
	useCompetaModalUpdate,
	useGetAllCompetasByUserId,
	TNewJob,
} from '..';
import { currentUserIdSelector } from 'src/features/auth';
import { customErrorHandler } from 'shared';

export const useJobUpdate = () => {
	const dispatch = useAppDispatch();
	const currentUserId = useAppSelector(currentUserIdSelector);
	const { handleGetAllCompetas, isCompetencesLoading } = useGetAllCompetasByUserId();
	const [updateCompetence, { isLoading }] = useUpdateJobCompetaMutation();
	const { handleCompetaModalUpdate } = useCompetaModalUpdate();

	const isUpdatingJobCompetenceLoading = isLoading || isCompetencesLoading;

	const handleJobUpdate = async (competaId: number, data: TNewJob) => {
		const newJob = {
			competaType: data.competaType,
			title: data.title ? data.title.trim() : null,
			description: data.description ? data.description.trim() : null,
			public: data.isPublic,
			includedInCV: data.isIncludedInCV,
			skillLevelId: data.skillLevelId ? data.skillLevelId : null,
			companyName: data.companyName ? data.companyName.trim() : null,
			jobStartDate: data.jobStartDate ? data.jobStartDate : null,
			jobEndDate: data.jobEndDate ? data.jobEndDate : null,
			currentJob: data.currentJob,
			jobTitleId: data.jobTitleId ? data.jobTitleId : null,
			industryId: data.industryId ? data.industryId : null,
			resultUrl: data.resultUrl ? data.resultUrl.trim() : null,
			achievements: data.achievements ? data.achievements.trim() : null,
		};

		const formData = new FormData();
		formData.append('data', new Blob([JSON.stringify(newJob)], { type: 'application/json' }));
		if (data.competaImage) formData.append('file', data.competaImage[0]);

		try {
			await updateCompetence({ competaId, formData }).unwrap();
			if (currentUserId) handleGetAllCompetas(currentUserId);
			handleCompetaModalUpdate();
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleJobUpdate, isUpdatingJobCompetenceLoading };
};