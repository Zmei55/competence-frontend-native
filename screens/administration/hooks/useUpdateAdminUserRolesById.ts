import { useTranslation } from 'react-i18next';

import { useAppDispatch, saveSnackbarMessage, saveSnackbarError } from 'src/app';
import { useUpdateAdminUserRolesByIdMutation, TAdminUserRolesUpdate } from '..';
import { customErrorHandler } from 'shared';

export const useUpdateAdminUserRolesById = () => {
	const dispatch = useAppDispatch();
	const [updateAdminUserRoles, { isLoading: isUpdateAdminUserRolesLoading }] =
		useUpdateAdminUserRolesByIdMutation();
	const { t } = useTranslation(['admin']);

	const handleUpdateAdminUserRoles = async (
		userId: number | string,
		data: TAdminUserRolesUpdate
	) => {
		const newUserRoles: TAdminUserRolesUpdate = {
			roles: data.roles,
		};

		try {
			await updateAdminUserRoles({ userId, newUserRoles }).unwrap();
			dispatch(saveSnackbarMessage(t('snackbar.userRolesUpdated')));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return {
		handleUpdateAdminUserRoles,
		isUpdateAdminUserRolesLoading,
	};
};
