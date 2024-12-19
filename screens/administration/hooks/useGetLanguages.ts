import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllLanguageQuery, saveLanguages } from '..';
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
