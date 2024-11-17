import { useAppDispatch } from 'src/app';
import {
	useLazyGetCurrentUserProfileQuery,
	saveProfile,
	saveProfileError,
	resetProfileError,
} from '..';
import { customErrorHandler } from 'shared';

export const useGetCurrentUserProfile = () => {
	const dispatch = useAppDispatch();
	const [getUserProfile, { isFetching: isCurrentUserProfileLoading }] =
		useLazyGetCurrentUserProfileQuery();

	const handleGetCurrentUserProfile = async () => {
		try {
			const gottenUserProfile = await getUserProfile().unwrap();
			dispatch(saveProfile(gottenUserProfile));

			dispatch(resetProfileError());
		} catch (error) {
			dispatch(saveProfileError(customErrorHandler(error)));
		}
	};

	return { handleGetCurrentUserProfile, isCurrentUserProfileLoading };
};
