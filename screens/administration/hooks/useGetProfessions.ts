import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllProfessionQuery } from 'redux/administration/guidesApi';
import { saveProfessionList } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

export const useGetProfessions = () => {
  const dispatch = useAppDispatch();
  const [get] = useLazyGetAllProfessionQuery();

  const getProfessions = async () => {
    try {
      const professions = await get().unwrap();
      dispatch(saveProfessionList(professions));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { getProfessions };
};
