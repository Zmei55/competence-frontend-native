import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import {
  useUpdateAdminUserNicknameByIdMutation,
  TAdminUserNicknameUpdate,
} from '..';
import { customErrorHandler } from 'shared/helpers';

export const useUpdateAdminUserNicknameById = () => {
  const dispatch = useAppDispatch();
  const [
    updateAdminUserNickname,
    { isLoading: isUpdateAdminUserNicknameLoading },
  ] = useUpdateAdminUserNicknameByIdMutation();
  const { t } = useTranslation(['admin']);

  const handleUpdateAdminUserNickname = async (
    userId: number | string,
    data: TAdminUserNicknameUpdate
  ) => {
    const newUserNickname: TAdminUserNicknameUpdate = {
      nickName: data.nickName,
    };

    try {
      await updateAdminUserNickname({ userId, newUserNickname }).unwrap();
      dispatch(saveSnackbarMessage(t('snackbar.userNicknameUpdated')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleUpdateAdminUserNickname,
    isUpdateAdminUserNicknameLoading,
  };
};
