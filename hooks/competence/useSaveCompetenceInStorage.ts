import { useAppDispatch } from '@/hooks';
import { saveCompetence } from '@/redux/competence';
import { TCompetence } from '@/types/competence';

export const useSaveCompetenceInStorage = () => {
  const dispatch = useAppDispatch();

  const handleSaveCompetenceInStorage = (competence: TCompetence) => {
    dispatch(saveCompetence(competence));
  };

  return { handleSaveCompetenceInStorage };
};
