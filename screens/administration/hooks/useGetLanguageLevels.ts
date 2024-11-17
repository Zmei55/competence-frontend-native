import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllLanguageLevelQuery, saveLanguageLevels } from '..';
import { customErrorHandler } from 'shared';

export const useGetLanguageLevels = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllLanguageLevelQuery();

	const getLanguageLevels = async () => {
		try {
			const languageLevels = await get().unwrap();
			dispatch(saveLanguageLevels(languageLevels));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getLanguageLevels };
};
