import { useAppDispatch } from 'src/app';
import { resetCompetence, saveCompetaError, resetCompetaError } from '..';
import { customErrorHandler } from 'shared';

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
