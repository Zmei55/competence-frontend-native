import { useState } from 'react';

import { TCompetaConfirmationRegistered, useLazyGetAllConfirmationsCurrentUserQuery } from '..';
import { customErrorHandler } from 'shared';

export const useGetAllConfirmationsCurrentUser = () => {
	const [confirmation, { isFetching: isConfirmationCurrentUserLoading }] =
		useLazyGetAllConfirmationsCurrentUserQuery();
	const [confirmationsCurrentUser, setConfirmationsCurrentUser] = useState<
		TCompetaConfirmationRegistered[] | null
	>(null);
	const [confirmationsCurrentUserError, setConfirmationsCurrentUserError] = useState<string | null>(
		null
	);

	const handleGetAllConfirmation = async () => {
		try {
			const gottenConfirmations = await confirmation().unwrap();
			setConfirmationsCurrentUser(gottenConfirmations);

			setConfirmationsCurrentUserError(null);
		} catch (error) {
			setConfirmationsCurrentUserError(customErrorHandler(error));
		}
	};

	return {
		confirmationsCurrentUser,
		handleGetAllConfirmation,
		confirmationsCurrentUserError,
		isConfirmationCurrentUserLoading,
	};
};
