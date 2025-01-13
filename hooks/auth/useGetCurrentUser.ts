import { useAppDispatch } from '@/hooks';
import { saveSnackbarError } from '@/redux/app';
import { useLazyGetCurrentUserQuery } from '@/redux/auth/authApi';
import { saveUser } from '@/redux/auth';
import { customErrorHandler } from '@/helpers';

export const useGetCurrentUser = () => {
  const dispatch = useAppDispatch();
  const [getUser, { isFetching: isGetUserLoading }] =
    useLazyGetCurrentUserQuery();

  const handleGetCurrentUser = async () => {
    try {
      const gottenUser = await getUser(null).unwrap();
      dispatch(saveUser(gottenUser));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleGetCurrentUser, isGetUserLoading };
};
