import { saveSnackbarError } from '@/redux/app';
import { useLazyGetAllCompetenciesByUserIdQuery } from '@/redux/administration/adminCompetenciesApi';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useGetAllCompetenciesByUserId = () => {
  const dispatch = useAppDispatch();
  const [
    getAllCompetenciesByUserId,
    { isFetching: isCompetenciesLoading, currentData: allCompetencies },
  ] = useLazyGetAllCompetenciesByUserIdQuery();

  const handleGetCompetenciesByUserId = async (id: number | string) => {
    try {
      await getAllCompetenciesByUserId(id).unwrap();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    allCompetencies,
    handleGetCompetenciesByUserId,
    isCompetenciesLoading,
  };
};
