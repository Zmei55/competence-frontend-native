import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllLanguageQuery } from 'redux/administration/guidesApi';
import { saveLanguages } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

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
