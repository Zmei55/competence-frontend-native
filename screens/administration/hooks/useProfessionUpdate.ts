import { useTranslation } from 'react-i18next';

import { useAppDispatch } from 'screens/app';
import { saveSnackbarMessage, saveSnackbarError } from 'redux/app';
import { useUpdateProfessionByIdMutation, updateProfessionInStorage } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useProfessionUpdate = () => {
  const dispatch = useAppDispatch();
  const [updateProfession, { isLoading: isUpdateProfessionLoading }] =
    useUpdateProfessionByIdMutation();
  const { t } = useTranslation(['guides']);

  const handleProfessionUpdate = async (id: number | string, name: string) => {
    try {
      const updatedProfession = await updateProfession({ id, name }).unwrap();
      dispatch(updateProfessionInStorage(updatedProfession));
      dispatch(saveSnackbarMessage(t('snackbar.professionUpdated')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleProfessionUpdate, isUpdateProfessionLoading };
};
