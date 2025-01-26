import { useTranslation } from 'react-i18next';

import { saveSnackbarMessage, saveSnackbarError } from '@/redux/app';
import { useDeleteDocumentMutation } from '@/redux/competence/documentsApi';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useDocumentDeleteById = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['competence']);
  const [deleteDocument, { isLoading: isDeleteDocumentLoading }] =
    useDeleteDocumentMutation();

  const handleDeleteDocument = async (documentId: number) => {
    try {
      await deleteDocument(documentId).unwrap();
      dispatch(saveSnackbarMessage(t('deletedDocument')));
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleDeleteDocument, isDeleteDocumentLoading };
};
