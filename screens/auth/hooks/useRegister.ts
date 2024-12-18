import { useAppDispatch } from 'screens/app';
import { useRegisterMutation } from 'redux/auth/authApi';
import {
  saveRegisterErrorMessage,
  resetRegisterErrorMessage,
} from 'redux/auth';
import { TNewUser, TRegisterForm } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const handleRegister = async (data: TRegisterForm) => {
    if (!data.email || !data.password || !data.nickName) return null;

    const newUser: TNewUser = {
      email: data.email.trim(),
      password: data.password.trim(),
      nickName: data.nickName.trim(),
    };

    try {
      await register(newUser).unwrap();

      dispatch(resetRegisterErrorMessage());
    } catch (error) {
      dispatch(saveRegisterErrorMessage(customErrorHandler(error)));
    }
  };

  return { handleRegister, isRegisterLoading };
};
