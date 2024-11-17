import { useState } from 'react';

import { useLazyGetUserProfileByIdQuery, TProfile } from '..';
import { customErrorHandler } from 'shared';

export const useGetUserProfileById = () => {
	const [getUserProfile, { isFetching: isUserProfileByIdLoading }] =
		useLazyGetUserProfileByIdQuery();
	const [userProfile, setUserProfile] = useState<TProfile | null>(null);
	const [userProfileError, setUserProfileError] = useState<string | null>(null);

	const handleGetUserProfileById = async (id: string | number) => {
		try {
			const gottenUserProfile = await getUserProfile(id).unwrap();
			setUserProfile(gottenUserProfile);
			setUserProfileError(null);
		} catch (error) {
			setUserProfileError(customErrorHandler(error));
		}
	};

	return {
		handleGetUserProfileById,
		userProfile,
		userProfileError,
		isUserProfileByIdLoading,
	};
};