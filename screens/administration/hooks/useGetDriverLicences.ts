import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllDriverLicenceQuery } from 'redux/administration/guidesApi';
import { saveDriverLicences } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

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
