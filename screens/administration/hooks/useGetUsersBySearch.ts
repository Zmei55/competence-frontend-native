import { useState } from 'react';
import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import {
  useGetUserProfilesBySearchMutation,
  TAdminUserProfile,
  TAdminUserSearch,
} from '..';
import { customErrorHandler } from 'shared/helpers';

export const useGetUsersBySearch = () => {
  const dispatch = useAppDispatch();
  const [getAdminUserProfiles, { isLoading: isAdminUserProfilesLoading }] =
    useGetUserProfilesBySearchMutation();
  const [adminUserProfileList, setAdminUserProfileList] = useState<
    TAdminUserProfile[] | null
  >(null);

  const handleGetUsersBySearch = async (values: TAdminUserSearch) => {
    try {
      const adminUserProfiles = await getAdminUserProfiles(values).unwrap();
      setAdminUserProfileList(adminUserProfiles);
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    adminUserProfileList,
    handleGetUsersBySearch,
    isAdminUserProfilesLoading,
  };
};
