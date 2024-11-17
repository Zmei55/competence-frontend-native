import { RootState } from 'redux/store';
import { TCompetence } from 'screens/competence';

export const competenceSelector = (state: RootState): TCompetence | null =>
	state.competences.competence;
export const competenceListSelector = (state: RootState): TCompetence[] | null =>
	state.competences.competences;
export const competenceErrorSelector = (state: RootState): string | null =>
	state.competences.errorMessage;
export const competaIsLoadingSelector = (state: RootState): boolean =>
	state.competences.isCompetenceLoading;
export const competaModalSelector = (state: RootState): boolean => state.competences.showModal;
