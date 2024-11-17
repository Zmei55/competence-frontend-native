import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllEducationTypeQuery, saveEducationTypes } from '..';
import { customErrorHandler } from 'shared';

export const useGetEducationTypes = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllEducationTypeQuery();

	const getEducationTypes = async () => {
		try {
			const educationTypes = await get().unwrap();
			dispatch(saveEducationTypes(educationTypes));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getEducationTypes };
};
