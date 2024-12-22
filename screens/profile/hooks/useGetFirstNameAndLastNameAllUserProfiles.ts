import { useState } from 'react';

import { useLazyGetFirstNameAndLastNameAllUserProfilesQuery } from 'redux/profile/profileApi';
import { TProfileName } from 'screens/profile/types';
import { customErrorHandler } from 'shared/helpers';

export const useGetFirstNameAndLastNameAllUserProfiles = () => {
  const [getNameAllProfiles, { isFetching: isNameAllProfilesLoading }] =
    useLazyGetFirstNameAndLastNameAllUserProfilesQuery();
  const [namesAllProfiles, setNamesAllProfiles] = useState<TProfileName[]>([]);
  const [namesAllProfilesError, setNamesAllProfilesError] = useState<
    string | null
  >(null);

  const handleGetFirstNameAndLastNameAllUserProfiles = async () => {
    try {
      const namesProfiles = await getNameAllProfiles().unwrap();
      setNamesAllProfiles(namesProfiles);
      setNamesAllProfilesError(null);
    } catch (error) {
      setNamesAllProfilesError(customErrorHandler(error));
    }
  };

  return {
    handleGetFirstNameAndLastNameAllUserProfiles,
    namesAllProfiles,
    namesAllProfilesError,
    isNameAllProfilesLoading,
  };
};
