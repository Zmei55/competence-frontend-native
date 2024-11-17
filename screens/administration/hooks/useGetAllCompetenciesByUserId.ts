import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllCompetenciesByUserIdQuery } from '..';
import { customErrorHandler } from 'shared';

export const useGetAllCompetenciesByUserId = () => {
	const dispatch = useAppDispatch();
	const [
		getAllCompetenciesByUserId,
		{ isFetching: isCompetenciesLoading, currentData: allCompetencies },
	] = useLazyGetAllCompetenciesByUserIdQuery();

	const handleGetCompetenciesByUserId = async (id: number | string) => {
		try {
			await getAllCompetenciesByUserId(id).unwrap();
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { allCompetencies, handleGetCompetenciesByUserId, isCompetenciesLoading };
};
