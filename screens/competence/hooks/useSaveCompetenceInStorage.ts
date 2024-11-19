import { useAppDispatch } from 'screens/app';
import { saveCompetence } from 'redux/competence';
import { TCompetence } from '..';

export const useSaveCompetenceInStorage = () => {
  const dispatch = useAppDispatch();

  const handleSaveCompetenceInStorage = (competence: TCompetence) => {
    dispatch(saveCompetence(competence));
  };

  return { handleSaveCompetenceInStorage };
};
