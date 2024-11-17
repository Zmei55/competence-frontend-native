import { useState } from 'react';
import { useLazyGetFirstNameAndLastNameAllUserProfilesQuery } from '../redux';
import { TProfileName } from '../types';
import { customErrorHandler } from 'shared';

export const useGetFirstNameAndLastNameAllUserProfiles = () => {
	const [getNameAllProfiles, { isFetching: isNameAllProfilesLoading }] =
		useLazyGetFirstNameAndLastNameAllUserProfilesQuery();
	const [namesAllProfiles, setNamesAllProfiles] = useState<TProfileName[]>([]);
	const [namesAllProfilesError, setNamesAllProfilesError] = useState<string | null>(null);

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
