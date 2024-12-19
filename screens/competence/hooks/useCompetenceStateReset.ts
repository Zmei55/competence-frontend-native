import { useAppDispatch } from 'screens/app';
import {
  resetCompetence,
  saveCompetaError,
  resetCompetaError,
} from 'redux/competence';
import { customErrorHandler } from 'shared/helpers';

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
