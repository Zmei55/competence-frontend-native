import { useLazyGetAllCompetencesQuery } from '@/redux/competence/competencesApi';
import {
  saveCompetenceList,
  saveCompetaError,
  resetCompetaError,
} from '@/redux/competence';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useGetAllCompetasByUserId = () => {
  const dispatch = useAppDispatch();
  const [getAllCompetas, { isFetching: isCompetencesLoading }] =
    useLazyGetAllCompetencesQuery();

  const handleGetAllCompetas = async (userId: number | string) => {
    try {
      const allCompetas = await getAllCompetas(userId).unwrap();
      dispatch(resetCompetaError());
      dispatch(saveCompetenceList(allCompetas));
    } catch (error) {
      dispatch(saveCompetaError(customErrorHandler(error)));
    }
  };

  return { handleGetAllCompetas, isCompetencesLoading };
};
