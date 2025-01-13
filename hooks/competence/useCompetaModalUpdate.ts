import { useAppDispatch, useAppSelector } from '@/hooks';
import { competaModalSelector, updateCompetaModal } from '@/redux/competence';

export const useCompetaModalUpdate = () => {
  const dispatch = useAppDispatch();
  const showCompetaModal = useAppSelector(competaModalSelector);

  const handleCompetaModalUpdate = () => {
    dispatch(updateCompetaModal(!showCompetaModal));
  };

  const handleCompetaModalCloseAndRedirect = (path: string) => {
    dispatch(updateCompetaModal(!showCompetaModal));
  };

  return {
    showCompetaModal,
    handleCompetaModalUpdate,
    handleCompetaModalCloseAndRedirect,
  };
};
