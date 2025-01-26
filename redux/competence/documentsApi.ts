import { api } from '../app/api';
import { TCompetence, TDocumentUpload } from '@/types/competence';

const documentsApi = api.injectEndpoints({
  endpoints: builder => ({
    getPreviewDocumentImage: builder.query<string, number>({
      query: previewImageId => ({
        url: `/api/image/original-size/${previewImageId}`,
        method: 'GET',
      }),
      providesTags: ['documents'],
      transformResponse: (response: { imageBase64: string }) =>
        response.imageBase64,
    }),
    downloadDocument: builder.query<Blob, number>({
      query: documentId => ({
        url: `/api/competa/document/${documentId}`,
        method: 'GET',
        headers: {
          'Content-type': 'application/pdf',
        },
        responseHandler: response => response.blob(),
        cache: 'no-cache',
      }),
      providesTags: ['documents'],
    }),
    uploadDocument: builder.mutation<TCompetence, TDocumentUpload>({
      query: ({ competenceId, formData }) => ({
        url: `/api/competa/document/${competenceId}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['documents'],
    }),
    deleteDocument: builder.mutation<TCompetence, number>({
      query: documentId => ({
        url: `/api/competa/document/${documentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['documents'],
    }),
  }),
});

export const {
  useGetPreviewDocumentImageQuery,
  useLazyDownloadDocumentQuery,
  useUploadDocumentMutation,
  useDeleteDocumentMutation,
} = documentsApi;
