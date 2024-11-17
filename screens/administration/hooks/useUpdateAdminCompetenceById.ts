import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import {
	useUpdateAdminCompetenceByUserIdMutation,
	resetAdministration,
} from 'src/features/administration';
import { useCompetaModalUpdate, TCompetenceForm } from 'src/features/competence';
import { customErrorHandler } from 'shared';

export const useUpdateAdminCompetenceById = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation(['competence']);
	const [updateCompetence, { isLoading: isAdminCompetenceLoading }] =
		useUpdateAdminCompetenceByUserIdMutation();
	const { handleCompetaModalUpdate } = useCompetaModalUpdate();

	const handleAdminCompetenceUpdate = async (competaId: number, data: TCompetenceForm) => {
		const formData = new FormData();
		formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));
		if (data.competaImage) formData.append('file', data.competaImage[0]);

		try {
			await updateCompetence({ competaId, formData }).unwrap();
			dispatch(saveSnackbarMessage(`${t('competencyHasBeen')} ${t('updated')}`));
			dispatch(resetAdministration());
			handleCompetaModalUpdate();
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleAdminCompetenceUpdate, isAdminCompetenceLoading };
};
