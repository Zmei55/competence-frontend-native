import { useState } from 'react';
import { useLazyGetAllCompetencesQuery } from '@/redux/competence/competencesApi';
import {
  // saveCompetenceList,
  saveCompetaError,
  resetCompetaError,
} from '@/redux/competence';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';
import { TCompetenceForList } from '@/types/competence';

export const useGetAllCompetasByUserId = () => {
  const dispatch = useAppDispatch();
  const [getAllCompetas, { isFetching: isCompetencesLoading }] =
    useLazyGetAllCompetencesQuery();
  const [competenceList, setCompetenceList] = useState<
    TCompetenceForList[] | null
  >(null);

  const handleGetAllCompetas = async (userId: number | string) => {
    try {
      const allCompetas = await getAllCompetas(userId).unwrap();
      dispatch(resetCompetaError());
      setCompetenceList(allCompetas);
      // dispatch(saveCompetenceList(allCompetas));
    } catch (error) {
      dispatch(saveCompetaError(customErrorHandler(error)));
    }
  };

  return { competenceList, handleGetAllCompetas, isCompetencesLoading };
};
