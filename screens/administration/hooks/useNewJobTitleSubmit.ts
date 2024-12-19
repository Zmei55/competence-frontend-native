import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { useCreateJobTitleMutation, addJobTitleInStorage } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useNewJobTitleSubmit = () => {
  const dispatch = useAppDispatch();
  const [createJobTitle, { isLoading: isCreateJobTitleLoading }] =
    useCreateJobTitleMutation();
  const { t } = useTranslation(['guides']);

  const handleNewJobTitleSubmit = async (name: string) => {
    try {
      const createdJobTitle = await createJobTitle(name).unwrap();
      dispatch(addJobTitleInStorage(createdJobTitle));
      dispatch(saveSnackbarMessage(t('snackbar.jobAdded')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleNewJobTitleSubmit, isCreateJobTitleLoading };
};
