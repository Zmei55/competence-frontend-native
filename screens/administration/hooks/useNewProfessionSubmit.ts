import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useCreateProfessionMutation, addProfessionInStorage } from '..';
import { customErrorHandler } from 'shared';

export const useNewProfessionSubmit = () => {
	const dispatch = useAppDispatch();
	const [createProfession, { isLoading: isCreateProfessionLoading }] =
		useCreateProfessionMutation();
	const { t } = useTranslation(['guides']);

	const handleNewProfessionSubmit = async (name: string) => {
		try {
			const createdProfession = await createProfession(name).unwrap();
			dispatch(addProfessionInStorage(createdProfession));
			dispatch(saveSnackbarMessage(t('snackbar.professionAdded')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleNewProfessionSubmit, isCreateProfessionLoading };
};