import { useTranslation } from 'react-i18next';
import { router } from 'expo-router';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useDeleteCompetenceByIdMutation } from '@/redux/competence/competencesApi';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useDeleteCompetenceById = () => {
  const dispatch = useAppDispatch();
  const [deleteCompetenceById, { isLoading: isDeleteCompetenceLoading }] =
    useDeleteCompetenceByIdMutation();
  const { t } = useTranslation(['competence']);

  const deleteCompetence = async (competenceId: number) => {
    try {
      await deleteCompetenceById(competenceId).unwrap();
      dispatch(saveSnackbarMessage(t('deletedConfirmation')));
      router.navigate('/(main)/competenciesScreen');
    } catch (errors) {
      dispatch(saveSnackbarError(customErrorHandler(errors)));
    }
  };
  return { deleteCompetence, isDeleteCompetenceLoading };
};
