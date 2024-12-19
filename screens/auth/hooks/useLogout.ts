import { api } from 'redux/app/api';
import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useLazyLogoutQuery } from 'redux/auth/authApi';
import { logoutSuccess, resetUser } from 'redux/auth';
import { customErrorHandler } from 'shared/helpers';

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const [logout] = useLazyLogoutQuery();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(resetUser());
      dispatch(logoutSuccess());
      dispatch(api.util.resetApiState());
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleLogout };
};
