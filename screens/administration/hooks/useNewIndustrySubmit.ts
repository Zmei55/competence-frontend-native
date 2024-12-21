import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { useCreateIndustryMutation } from 'redux/administration/guidesApi';
import { addIndustryInStorage } from 'redux/administration';
import { useAppDispatch } from 'screens/app';
import { customErrorHandler } from 'shared/helpers';

export const useNewIndustrySubmit = () => {
  const dispatch = useAppDispatch();
  const [createIndustry, { isLoading: isCreateIndustryLoading }] =
    useCreateIndustryMutation();
  const { t } = useTranslation(['guides']);

  const handleNewIndustrySubmit = async (name: string) => {
    try {
      const createdIndustry = await createIndustry(name).unwrap();
      dispatch(addIndustryInStorage(createdIndustry));
      dispatch(saveSnackbarMessage(t('snackbar.industryAdded')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleNewIndustrySubmit, isCreateIndustryLoading };
};
