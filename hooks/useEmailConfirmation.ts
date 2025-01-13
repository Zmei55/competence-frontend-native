import { useEffect, useState } from 'react';

import { useLazyEmailConfirmationQuery } from '@/redux/emailConfirmation/emailConfirmationApi';
import { customErrorHandler } from '@/helpers';

export const useEmailConfirmation = (token: string | undefined) => {
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
        } catch (error) {
          setEmailConfirmationError(customErrorHandler(error));
        }
      };

      confirm();
    }
  }, [emailConfirmation, token]);

  return { isEmailConfirmationLoading, emailConfirmationError };
};
