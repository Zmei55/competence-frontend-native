import { useAppDispatch } from 'src/app';
import { saveCompetence, TCompetence } from '..';

export const useSaveCompetenceInStorage = () => {
	const dispatch = useAppDispatch();

	const handleSaveCompetenceInStorage = (competence: TCompetence) => {
		dispatch(saveCompetence(competence));
	};

	return { handleSaveCompetenceInStorage };
};
