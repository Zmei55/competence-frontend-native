import { useLazyGetPublicAndConfirmedCompetaByAllUsersQuery } from '../redux';
import { useState } from 'react';
import { TCompetenceFeed } from '../types';
import { customErrorHandler } from 'shared';

export const useGetPublicAndConfirmedCompetaByAllUsers = () => {
	const [getAllCompetasAllUsers, { isFetching: isCompetencesLoading }] =
		useLazyGetPublicAndConfirmedCompetaByAllUsersQuery();
	const [competaAllUsersList, setCompetaAllUsersList] = useState<TCompetenceFeed[] | null>(null);
	const [getAllCompetasAllUsersError, setGetAllCompetasAllUsersError] = useState<string | null>(
		null
	);

	const handleGetAllCompetasAllUsers = async () => {
		try {
			const allCompetasAllUsers = await getAllCompetasAllUsers().unwrap();
			setCompetaAllUsersList(allCompetasAllUsers);
		} catch (error) {
			setGetAllCompetasAllUsersError(customErrorHandler(error));
		}
	};

	return {
		competaAllUsersList,
		handleGetAllCompetasAllUsers,
		isCompetencesLoading,
		getAllCompetasAllUsersError,
	};
};
