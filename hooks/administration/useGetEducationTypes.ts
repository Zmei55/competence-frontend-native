import { saveSnackbarError } from '@/redux/app';
import { useLazyGetAllEducationTypeQuery } from '@/redux/administration/guidesApi';
import { saveEducationTypes } from '@/redux/administration';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

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
