import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { useCreateJobTitleMutation } from 'redux/administration/guidesApi';
import { addJobTitleInStorage } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
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
