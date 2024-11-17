import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useUpdateAdminUserEmailByIdMutation, TAdminUserEmailUpdate } from '..';
import { customErrorHandler } from 'shared';

export const useUpdateAdminEmailUserById = () => {
	const dispatch = useAppDispatch();
	const [updateAdminEmailUser, { isLoading: isUpdateAdminUserEmailLoading }] =
		useUpdateAdminUserEmailByIdMutation();
	const { t } = useTranslation(['admin']);

	const handleUpdateAdminUserEmail = async (
		userId: number | string,
		data: TAdminUserEmailUpdate
	) => {
		const newUserEmail: TAdminUserEmailUpdate = {
			email: data.email,
		};

		try {
			await updateAdminEmailUser({ userId, newUserEmail }).unwrap();
			dispatch(saveSnackbarMessage(t('snackbar.userEmailUpdated')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return {
		handleUpdateAdminUserEmail,
		isUpdateAdminUserEmailLoading,
	};
};
