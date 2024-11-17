import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useUploadAvatarMutation, useGetCurrentUserProfile } from '..';
import { useGetCurrentUser } from 'src/features/auth';
import { customErrorHandler } from 'shared';

export const useUploadAvatarHandler = () => {
	const dispatch = useAppDispatch();
	const [upload, { isLoading }] = useUploadAvatarMutation();
	const { handleGetCurrentUser } = useGetCurrentUser();
	const { handleGetCurrentUserProfile, isCurrentUserProfileLoading } = useGetCurrentUserProfile();

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
