import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useUpdateProfessionByIdMutation, updateProfessionInStorage } from '..';
import { customErrorHandler } from 'shared';

export const useProfessionUpdate = () => {
	const dispatch = useAppDispatch();
	const [updateProfession, { isLoading: isUpdateProfessionLoading }] =
		useUpdateProfessionByIdMutation();
	const { t } = useTranslation(['guides']);

	const handleProfessionUpdate = async (id: number | string, name: string) => {
		try {
			const updatedProfession = await updateProfession({ id, name }).unwrap();
			dispatch(updateProfessionInStorage(updatedProfession));
			dispatch(saveSnackbarMessage(t('snackbar.professionUpdated')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleProfessionUpdate, isUpdateProfessionLoading };
};
