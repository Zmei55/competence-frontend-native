import { useState } from 'react';
import { useLazyGetPublicAndConfirmedCompetaByAllUsersQuery } from '@/redux/competence/competencesApi';
import { TCompetenceFeed } from '@/types/competence';
import { customErrorHandler } from '@/helpers';

export const useGetPublicAndConfirmedCompetaByAllUsers = () => {
  const [getAllCompetasAllUsers, { isFetching: isCompetencesLoading }] =
    useLazyGetPublicAndConfirmedCompetaByAllUsersQuery();
  const [competaAllUsersList, setCompetaAllUsersList] = useState<
    TCompetenceFeed[] | null
  >(null);
  const [getAllCompetasAllUsersError, setGetAllCompetasAllUsersError] =
    useState<string | null>(null);

  const handleGetAllCompetasAllUsers = async () => {
    try {
      const allCompetasAllUsers = await getAllCompetasAllUsers().unwrap();
      setCompetaAllUsersList(allCompetasAllUsers);
    } catch (error) {
      setGetAllCompetasAllUsersError(customErrorHandler(error));
    }
  };

  return {
    competaAllUsersList,
    handleGetAllCompetasAllUsers,
    isCompetencesLoading,
    getAllCompetasAllUsersError,
  };
};
