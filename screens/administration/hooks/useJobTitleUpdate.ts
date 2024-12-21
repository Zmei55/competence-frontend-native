import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { useUpdateJobTitleByIdMutation } from 'redux/administration/guidesApi';
import { updateJobTitleInStorage } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

export const useJobTitleUpdate = () => {
  const dispatch = useAppDispatch();
  const [updateJobTitle, { isLoading: isUpdateJobTitleLoading }] =
    useUpdateJobTitleByIdMutation();
  const { t } = useTranslation(['guides']);

  const handleJobTitleUpdate = async (id: number | string, name: string) => {
    try {
      const updatedJobTitle = await updateJobTitle({ id, name }).unwrap();
      dispatch(updateJobTitleInStorage(updatedJobTitle));
      dispatch(saveSnackbarMessage(t('snackbar.jobUpdated')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleJobTitleUpdate, isUpdateJobTitleLoading };
};
