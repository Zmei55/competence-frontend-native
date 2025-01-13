import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useUpdateAdminUserRolesByIdMutation } from '@/redux/administration/adminUsersApi';
import { useAppDispatch } from '@/hooks';
import { TAdminUserRolesUpdate } from '@/types/administration';
import { customErrorHandler } from '@/helpers';

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
