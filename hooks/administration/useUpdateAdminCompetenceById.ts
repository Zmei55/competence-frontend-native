import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useUpdateAdminCompetenceByUserIdMutation } from '@/redux/administration/adminCompetenciesApi';
import { resetAdministration } from '@/redux/administration';
import { useAppDispatch } from '@/hooks';
import { useCompetaModalUpdate } from '@/hooks/competence/useCompetaModalUpdate';
import { TCompetenceForm } from '@/types/competence';
import { customErrorHandler } from '@/helpers';

export const useUpdateAdminCompetenceById = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['competence']);
  const [updateCompetence, { isLoading: isAdminCompetenceLoading }] =
    useUpdateAdminCompetenceByUserIdMutation();
  const { handleCompetaModalUpdate } = useCompetaModalUpdate();

  const handleAdminCompetenceUpdate = async (
    competaId: number,
    data: TCompetenceForm
  ) => {
    const formData = new FormData();
    formData.append(
      'data',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    );
    if (data.competaImage) formData.append('file', data.competaImage[0]);

    try {
      await updateCompetence({ competaId, formData }).unwrap();
      dispatch(
        saveSnackbarMessage(`${t('competencyHasBeen')} ${t('updated')}`)
      );
      dispatch(resetAdministration());
      handleCompetaModalUpdate();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleAdminCompetenceUpdate, isAdminCompetenceLoading };
};
