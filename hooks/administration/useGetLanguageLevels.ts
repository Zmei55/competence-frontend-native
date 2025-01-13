import { saveSnackbarError } from '@/redux/app';
import { useLazyGetAllLanguageLevelQuery } from '@/redux/administration/guidesApi';
import { saveLanguageLevels } from '@/redux/administration';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

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
