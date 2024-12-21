import { saveSnackbarError } from 'redux/app';
import { useLazyGetAdminUserByIdQuery } from 'redux/administration/adminUsersApi';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

export const useGetAdminUserById = () => {
  const dispatch = useAppDispatch();
  const [
    getAdminUserById,
    { isFetching: isAdminUserLoading, currentData: adminUser },
  ] = useLazyGetAdminUserByIdQuery();

  const handleGetAdminUserById = async (id: number | string) => {
    try {
      await getAdminUserById(id).unwrap();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { adminUser, handleGetAdminUserById, isAdminUserLoading };
};
