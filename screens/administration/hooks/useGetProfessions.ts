import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllProfessionQuery, saveProfessionList } from '..';
import { customErrorHandler } from 'shared';

export const useGetProfessions = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllProfessionQuery();

	const getProfessions = async () => {
		try {
			const professions = await get().unwrap();
			dispatch(saveProfessionList(professions));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getProfessions };
};
