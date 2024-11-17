import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useUpdateIndustryByIdMutation, updateIndustryInStorage } from '..';
import { customErrorHandler } from 'shared';

export const useIndustryUpdate = () => {
	const dispatch = useAppDispatch();
	const [updateIndustry, { isLoading: isUpdateIndustryLoading }] = useUpdateIndustryByIdMutation();
	const { t } = useTranslation(['guides']);

	const handleIndustryUpdate = async (id: number | string, name: string) => {
		try {
			const updatedIndustry = await updateIndustry({ id, name }).unwrap();
			dispatch(updateIndustryInStorage(updatedIndustry));
			dispatch(saveSnackbarMessage(t('snackbar.industryUpdated')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleIndustryUpdate, isUpdateIndustryLoading };
};