import { useTranslation } from 'react-i18next';

import { saveSnackbarError } from '@/redux/app';
import { useLazyDownloadDocumentQuery } from '@/redux/competence/documentsApi';
import { useAppDispatch } from '@/hooks';
import { customErrorHandler } from '@/helpers';

export const useDocumentPreviewById = () => {
  const dispatch = useAppDispatch();
  const [getDocument] = useLazyDownloadDocumentQuery();
  const { t } = useTranslation(['competence']);

  const handlePreviewDocument = async (documentId: number) => {
    try {
      const data = await getDocument(documentId).unwrap();
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      dispatch(
        saveSnackbarError(
          customErrorHandler(t('documents.failedDownloadDocument'))
        )
      );
    }
  };

  return { handlePreviewDocument };
};
