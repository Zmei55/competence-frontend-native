import {
  resetCompetence,
  saveCompetaError,
  resetCompetaError,
} from '@/redux/competence';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useCompetenceStateReset = () => {
  const dispatch = useAppDispatch();

  const handleCompetenceReset = () => {
    try {
      dispatch(resetCompetaError());
      dispatch(resetCompetence());
    } catch (error) {
      dispatch(saveCompetaError(customErrorHandler(error)));
    }
  };

  return { handleCompetenceReset };
};
