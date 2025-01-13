import { useAppDispatch } from '@/hooks';
import { saveSnackbarError } from '@/redux/app';
import { useResetPasswordMutation } from '@/redux/auth/authApi';
import { customErrorHandler } from '@/helpers';

export const useResetPassword = () => {
  const dispatch = useAppDispatch();
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
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleResetPassword, isResetPasswordLoading, resetPasswordError };
};
