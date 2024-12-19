import { api } from '../app/api';
import {
  TCompetaConfirmationRegistered,
  TCompetaConfirmationUnregistered,
  TGuarantor,
  TNewCompetaConfirmationRegistered,
  TNewCompetaConfirmationUnregistered,
  TGuarantorFilter,
} from 'screens/guarantee';

const guaranteeApi = api.injectEndpoints({
  endpoints: builder => ({
    getGuarantorById: builder.query<TGuarantor, number | string>({
      query: guarantorId => ({
        url: `/api/guarantor-profile/${guarantorId}`,
        method: 'GET',
      }),
      providesTags: ['guarantee'],
    }),
    getAllConfirmationsCurrentUser: builder.query<
      TCompetaConfirmationRegistered[],
      void
    >({
      query: () => ({
        url: `/api/competa-confirm/guarantor/all`,
        method: 'GET',
      }),
      providesTags: ['guarantee'],
    }),
    getAllConfirmationRegisteredGuarantorByCompetaId: builder.query<
      TCompetaConfirmationRegistered[],
      number
    >({
      query: competaId => ({
        url: `/api/competa-confirm/competa/${competaId}`,
        method: 'GET',
      }),
      providesTags: ['guarantee'],
    }),
    getAllConfirmationUnregisteredGuarantorByCompetaId: builder.query<
      TCompetaConfirmationUnregistered[],
      number
    >({
      query: competaId => ({
        url: `/api/competa-confirm/unregistered-guarantor/competa/${competaId}`,
        method: 'GET',
      }),
      providesTags: ['guarantee'],
    }),
    getAllGuarantorByFilter: builder.mutation<TGuarantor[], TGuarantorFilter>({
      query: body => ({
        url: '/api/guarantor-profile',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['guarantee'],
    }),
    sendRegisteredGuarantorConfirmation: builder.mutation<
      TCompetaConfirmationRegistered,
      TNewCompetaConfirmationRegistered
    >({
      query: ({ competaId, guarantorProfileId }) => ({
        url: `/api/competa-confirm/competa/${competaId}/guarantor/${guarantorProfileId}`,
        method: 'POST',
      }),
      invalidatesTags: ['guarantee'],
    }),
    sendUnregisteredGuarantorConfirmation: builder.mutation<
      void,
      TNewCompetaConfirmationUnregistered
    >({
      query: body => ({
        url: 'api/competa-confirm/unregistered-guarantor/send-email',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['guarantee'],
    }),
    sendNotificationEmailToRegisteredGuarantor: builder.mutation<void, number>({
      query: competaConfirmationId => ({
        url: `api/competa-confirm/notification-email/${competaConfirmationId}`,
        method: 'POST',
      }),
      invalidatesTags: ['guarantee'],
    }),
    sendNewStatusConfirmation: builder.mutation<
      void,
      { competaConfirmationId: number; newStatus: string }
    >({
      query: ({ competaConfirmationId, newStatus }) => ({
        url: `api/competa-confirm/${competaConfirmationId}`,
        method: 'PUT',
        body: {
          statusCompetaConfirmation: newStatus,
        },
      }),
      invalidatesTags: ['guarantee'],
    }),
  }),
});

export const {
  useGetGuarantorByIdQuery,
  useLazyGetAllConfirmationRegisteredGuarantorByCompetaIdQuery,
  useLazyGetAllConfirmationUnregisteredGuarantorByCompetaIdQuery,
  useGetAllGuarantorByFilterMutation,
  useSendRegisteredGuarantorConfirmationMutation,
  useSendUnregisteredGuarantorConfirmationMutation,
  useSendNotificationEmailToRegisteredGuarantorMutation,
  useLazyGetAllConfirmationsCurrentUserQuery,
  useSendNewStatusConfirmationMutation,
} = guaranteeApi;
