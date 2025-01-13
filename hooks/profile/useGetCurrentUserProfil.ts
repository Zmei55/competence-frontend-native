import { useLazyGetCurrentUserProfileQuery } from '@/redux/profile/profileApi';
import {
  saveProfile,
  saveProfileError,
  resetProfileError,
} from '@/redux/profile';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

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
