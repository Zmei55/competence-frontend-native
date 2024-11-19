import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { TAdminUserDataUpdate, useUpdateAdminUserDataByIdMutation } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useUpdateAdminUserDataById = () => {
  const dispatch = useAppDispatch();
  const [updateAdminUserData, { isLoading: isUpdateAdminUserDataLoading }] =
    useUpdateAdminUserDataByIdMutation();
  const { t } = useTranslation(['admin']);

  const handleUpdateAdminUserData = async (
    userId: number | string,
    data: TAdminUserDataUpdate
  ) => {
    const newUserData: TAdminUserDataUpdate = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      profession: data.profession,
      skillLevelId: data.skillLevelId,
      specialty: Array.isArray(data.specialty)
        ? data.specialty.join(',')
        : data.specialty,
    };

    try {
      await updateAdminUserData({ userId, newUserData }).unwrap();
      dispatch(saveSnackbarMessage(t('snackbar.userDataUpdated')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleUpdateAdminUserData,
    isUpdateAdminUserDataLoading,
  };
};
