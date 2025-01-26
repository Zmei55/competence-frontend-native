import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useUploadDocumentMutation } from '@/redux/competence/documentsApi';
import { useAppDispatch } from '@/hooks';
import { TDocumentUploadForm } from '@/types/competence';
import { customErrorHandler } from '@/helpers';

export const useDocumentUpload = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['competence']);
  const [sendDocument, { isLoading: isSendDocumentLoading }] =
    useUploadDocumentMutation();

  const handleDocumentUpload = async (
    competenceId: number,
    data: TDocumentUploadForm
  ) => {
    const formData = new FormData();

    if (!data.files) return null;

    formData.append('description', data.description);
    formData.append('file', data.files[0]);

    try {
      await sendDocument({
        competenceId,
        formData,
      }).unwrap();
      dispatch(saveSnackbarMessage(t('documents.savedDocument')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleDocumentUpload, isSendDocumentLoading };
};
