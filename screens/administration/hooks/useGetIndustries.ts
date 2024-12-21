import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllIndustryQuery } from 'redux/administration/guidesApi';
import { saveIndustryList } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

export const useGetIndustries = () => {
  const dispatch = useAppDispatch();
  const [get] = useLazyGetAllIndustryQuery();

  const getIndustries = async () => {
    try {
      const industries = await get().unwrap();
      dispatch(saveIndustryList(industries));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { getIndustries };
};
