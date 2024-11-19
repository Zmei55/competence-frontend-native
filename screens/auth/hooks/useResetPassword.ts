import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useResetPasswordMutation } from 'redux/auth/authApi';
import { customErrorHandler } from 'shared/helpers';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [
    resetPassword,
    { isLoading: isResetPasswordLoading, error: resetPasswordError },
  ] = useResetPasswordMutation();

  const handleResetPassword = async (
    oldPassword: string,
    newPassword: string
  ): Promise<void> => {
    try {
      await resetPassword({
        oldPassword,
        newPassword,
      }).unwrap();

      if (!resetPasswordError) navigate('Login');
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleResetPassword, isResetPasswordLoading, resetPasswordError };
};
