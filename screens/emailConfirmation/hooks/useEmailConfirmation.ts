import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLazyEmailConfirmationQuery } from '..';
import { customErrorHandler } from 'shared';

export const useEmailConfirmation = (token: string | undefined) => {
	const navigate = useNavigate();
	const [emailConfirmation, { isFetching: isEmailConfirmationLoading }] =
		useLazyEmailConfirmationQuery();
	const [emailConfirmationError, setEmailConfirmationError] = useState<string | null>(null);

	useEffect(() => {
		if (token) {
			const confirm = async () => {
				try {
					await emailConfirmation(token);
					setEmailConfirmationError(null);
					navigate('/login');
				} catch (error) {
					setEmailConfirmationError(customErrorHandler(error));
				}
			};

			confirm();
		}
	}, [token]);

	return { isEmailConfirmationLoading, emailConfirmationError };
};
