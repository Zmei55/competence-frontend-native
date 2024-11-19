import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllCountriesQuery } from 'redux/profile/countryApi';
import { saveCountries } from 'redux/profile';
import { customErrorHandler } from 'shared/helpers';

export const useGetAllCountries = () => {
  const dispatch = useAppDispatch();
  const [getAllCountries, { isFetching: isCountriesLoading }] =
    useLazyGetAllCountriesQuery();

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
