import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useCreateJobTitleMutation, addJobTitleInStorage } from '..';
import { customErrorHandler } from 'shared';

export const useNewJobTitleSubmit = () => {
	const dispatch = useAppDispatch();
	const [createJobTitle, { isLoading: isCreateJobTitleLoading }] = useCreateJobTitleMutation();
	const { t } = useTranslation(['guides']);

	const handleNewJobTitleSubmit = async (name: string) => {
		try {
			const createdJobTitle = await createJobTitle(name).unwrap();
			dispatch(addJobTitleInStorage(createdJobTitle));
			dispatch(saveSnackbarMessage(t('snackbar.jobAdded')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleNewJobTitleSubmit, isCreateJobTitleLoading };
};
