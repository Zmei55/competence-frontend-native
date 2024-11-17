import { useState } from 'react';
import { useLazyGetCompetenceByIdQuery, TCompetence } from '..';
import { customErrorHandler } from 'shared';

export const useGetCompetaById = () => {
	const [getCompeta, { isFetching: isCompetenceLoading }] = useLazyGetCompetenceByIdQuery();
	const [competence, setCompetence] = useState<TCompetence | null>(null);
	const [competenceByIdError, setCompetenceByIdError] = useState<string | null>(null);

	const handleGetCompeta = async (competaId: number) => {
		try {
			const competa = await getCompeta(competaId).unwrap();
			setCompetence(competa);
		} catch (error) {
			setCompetenceByIdError(customErrorHandler(error));
		}
	};

	return {
		handleGetCompeta,
		competence,
		competenceByIdError,
		isCompetenceLoading,
	};
};