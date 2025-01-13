import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/hooks';
import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useDeleteCurrentAccountMutation } from '@/redux/auth/authApi';
import { customErrorHandler } from '@/helpers';

export const useDeleteCurrentAccount = () => {
  const dispatch = useAppDispatch();
  const [deleteAccount, { isLoading: isDeleteCurrentAccount }] =
    useDeleteCurrentAccountMutation();
  const { t } = useTranslation(['auth']);

  const handleDeleteCurrentAccount = async () => {
    try {
      await deleteAccount().unwrap();
      dispatch(saveSnackbarMessage(t('accountDeleted')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleDeleteCurrentAccount, isDeleteCurrentAccount };
};
