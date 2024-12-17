import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'screens/app';
import { useLoginMutation } from 'redux/auth/authApi';
import {
  loginSuccess,
  saveLoginErrorMessage,
  resetLoginErrorMessage,
} from 'redux/auth';
import { TCredentials } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();

  const handleLogin = async (data: TCredentials) => {
    if (!data.email || !data.password) {
      return null;
    }

    try {
      const loginResponse = await login(data).unwrap();
      dispatch(loginSuccess(loginResponse));
      dispatch(resetLoginErrorMessage());

      // navigate('/');
    } catch (error) {
      const errorMessage = customErrorHandler(error);
      if (errorMessage === 'Bad credentials') {
        dispatch(
          saveLoginErrorMessage(
            'E-mail or password is not correct. Please, check and login again'
          )
        );
      } else {
        dispatch(saveLoginErrorMessage(errorMessage));
      }
    }
  };

  return { handleLogin, isLoginLoading };
};
