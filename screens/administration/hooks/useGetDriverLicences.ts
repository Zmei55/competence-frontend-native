import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllDriverLicenceQuery, saveDriverLicences } from '..';
import { customErrorHandler } from 'shared';

export const useGetDriverLicences = () => {
	const dispatch = useAppDispatch();
	const [get] = useLazyGetAllDriverLicenceQuery();

	const getDriverLicences = async () => {
		try {
			const driverLicences = await get().unwrap();
			dispatch(saveDriverLicences(driverLicences));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { getDriverLicences };
};
