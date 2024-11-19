import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useUploadAvatarMutation } from 'redux/profile/avatarApi';
import { useGetCurrentUserProfile } from '..';
import { useGetCurrentUser } from 'screens/auth';
import { customErrorHandler } from 'shared/helpers';

export const useUploadAvatarHandler = () => {
  const dispatch = useAppDispatch();
  const [upload, { isLoading }] = useUploadAvatarMutation();
  const { handleGetCurrentUser } = useGetCurrentUser();
  const { handleGetCurrentUserProfile, isCurrentUserProfileLoading } =
    useGetCurrentUserProfile();

  const isAvatarLoading = isLoading || isCurrentUserProfileLoading;

  const handleUploadAvatar = async (data: FileList | null) => {
    if (!data) return null;

    const file = data[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      await upload(formData).unwrap();
      handleGetCurrentUser();
      handleGetCurrentUserProfile();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleUploadAvatar, isAvatarLoading };
};
