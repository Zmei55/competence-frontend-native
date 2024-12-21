import { useState } from 'react';

import { saveSnackbarError } from 'redux/app';
import { useGetUserProfilesBySearchMutation } from 'redux/administration/adminUsersApi';
import { TAdminUserProfile, TAdminUserSearch } from 'screens/administration';
import { useAppDispatch } from 'screens/app';
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
