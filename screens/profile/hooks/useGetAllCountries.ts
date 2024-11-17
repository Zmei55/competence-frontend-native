import { useAppDispatch, saveSnackbarError } from 'src/app';
import { useLazyGetAllCountriesQuery, saveCountries } from '..';
import { customErrorHandler } from 'shared';

export const useGetAllCountries = () => {
	const dispatch = useAppDispatch();
	const [getAllCountries, { isFetching: isCountriesLoading }] = useLazyGetAllCountriesQuery();

	const handleGetAllCountries = async () => {
		try {
			const countries = await getAllCountries().unwrap();
			dispatch(saveCountries(countries));
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleGetAllCountries, isCountriesLoading };
};
