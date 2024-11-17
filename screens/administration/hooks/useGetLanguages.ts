import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllLanguageQuery, saveLanguages } from '..';
import { customErrorHandler } from 'shared';

export const useGetLanguages = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllLanguageQuery();

	const getLanguages = async () => {
		try {
			const languages = await get().unwrap();
			dispatch(saveLanguages(languages));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getLanguages };
};
