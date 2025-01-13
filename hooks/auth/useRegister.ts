import { router } from 'expo-router';

import { useAppDispatch } from '@/hooks';
import { useRegisterMutation } from '@/redux/auth/authApi';
import {
  saveRegisterErrorMessage,
  resetRegisterErrorMessage,
} from '@/redux/auth';
import { TNewUser, TRegisterForm } from '@/types/auth';
import { customErrorHandler } from '@/helpers';

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
      router.push('/loginScreen');
    } catch (error) {
      dispatch(saveRegisterErrorMessage(customErrorHandler(error)));
    }
  };

  return { handleRegister, isRegisterLoading };
};
