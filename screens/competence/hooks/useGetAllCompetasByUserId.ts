import { useAppDispatch } from 'src/app';
import {
	useLazyGetAllCompetencesQuery,
	saveCompetenceList,
	saveCompetaError,
	resetCompetaError,
} from '..';
import { customErrorHandler } from 'shared';

export const useGetAllCompetasByUserId = () => {
	const dispatch = useAppDispatch();
	const [getAllCompetas, { isFetching: isCompetencesLoading }] = useLazyGetAllCompetencesQuery();

	const handleGetAllCompetas = async (userId: number | string) => {
		try {
			const allCompetas = await getAllCompetas(userId).unwrap();
			dispatch(resetCompetaError());
			dispatch(saveCompetenceList(allCompetas));
		} catch (error) {
			dispatch(saveCompetaError(customErrorHandler(error)));
		}
	};

	return { handleGetAllCompetas, isCompetencesLoading };
};
