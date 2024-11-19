import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useLazyEmailConfirmationQuery } from 'redux/emailConfirmation/emailConfirmationApi';
import { customErrorHandler } from 'shared/helpers';

export const useEmailConfirmation = (token: string | undefined) => {
  const { navigate } = useNavigation();
  const [emailConfirmation, { isFetching: isEmailConfirmationLoading }] =
    useLazyEmailConfirmationQuery();
  const [emailConfirmationError, setEmailConfirmationError] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (token) {
      const confirm = async () => {
        try {
          await emailConfirmation(token);
          setEmailConfirmationError(null);
          navigate('Login');
        } catch (error) {
          setEmailConfirmationError(customErrorHandler(error));
        }
      };

      confirm();
    }
  }, [token]);

  return { isEmailConfirmationLoading, emailConfirmationError };
};
