import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from 'screens/app';
import { competaModalSelector, updateCompetaModal } from 'redux/competence';

export const useCompetaModalUpdate = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const showCompetaModal = useAppSelector(competaModalSelector);

  const handleCompetaModalUpdate = () => {
    dispatch(updateCompetaModal(!showCompetaModal));
  };

  const handleCompetaModalCloseAndRedirect = (path: string) => {
    dispatch(updateCompetaModal(!showCompetaModal));
    // navigate(`/${path}`);
  };

  return {
    showCompetaModal,
    handleCompetaModalUpdate,
    handleCompetaModalCloseAndRedirect,
  };
};
