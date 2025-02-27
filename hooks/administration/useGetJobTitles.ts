import { saveSnackbarError } from '@/redux/app';
import { useLazyGetAllJobTitleQuery } from '@/redux/administration/guidesApi';
import { saveJobTitleList } from '@/redux/administration';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

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
