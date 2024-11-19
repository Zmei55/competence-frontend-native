import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useLazyGetAllJobTitleQuery, saveJobTitleList } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useGetJobTitles = () => {
  const dispatch = useAppDispatch();
  const [get] = useLazyGetAllJobTitleQuery();

  const getJobTitles = async () => {
    try {
      const jobTitles = await get().unwrap();
      dispatch(saveJobTitleList(jobTitles));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { getJobTitles };
};
