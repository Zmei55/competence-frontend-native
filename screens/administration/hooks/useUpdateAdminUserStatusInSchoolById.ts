import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import {
  useUpdateAdminUserStatusInSchoolByIdMutation,
  TAdminUserStatusInSchoolUpdate,
} from '..';
import { customErrorHandler } from 'shared/helpers';

export const useUpdateAdminUserStatusInSchoolById = () => {
  const dispatch = useAppDispatch();
  const [
    updateAdminUserStatusInSchool,
    { isLoading: isUpdateAdminUserStatusInSchoolLoading },
  ] = useUpdateAdminUserStatusInSchoolByIdMutation();
  const { t } = useTranslation(['admin']);

  const handleUpdateAdminUserStatusInSchool = async (
    userId: number | string,
    data: TAdminUserStatusInSchoolUpdate
  ) => {
    const newUserStatusInSchool: TAdminUserStatusInSchoolUpdate = {
      statusInSchool: data.statusInSchool,
    };

    try {
      await updateAdminUserStatusInSchool({
        userId,
        newUserStatusInSchool,
      }).unwrap();
      dispatch(saveSnackbarMessage(t('snackbar.userStatusInSchoolUpdated')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleUpdateAdminUserStatusInSchool,
    isUpdateAdminUserStatusInSchoolLoading,
  };
};
