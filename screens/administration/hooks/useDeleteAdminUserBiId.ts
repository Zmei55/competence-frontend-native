import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useDeleteAdminUserByIdMutation } from '..';
import { customErrorHandler } from 'shared';

export const useDeleteAdminUserById = () => {
	const dispatch = useAppDispatch();
	const [deleteAdminUserById, { isLoading: isAdminUserDeleting }] =
		useDeleteAdminUserByIdMutation();
	const { t } = useTranslation(['admin']);

	const handleDeleteAdminUserById = async (id: number | string, callBack?: () => void) => {
		try {
			await deleteAdminUserById(id).unwrap();
			if (callBack) callBack();
			dispatch(saveSnackbarMessage(t('updateMenu.accountDeleted')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleDeleteAdminUserById, isAdminUserDeleting };
};
