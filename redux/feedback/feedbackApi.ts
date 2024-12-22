import { api } from '../app/api';
import {
  TNewCompletedFeedback,
  TNewEmptyFeedbackRegisteredUser,
  TNewEmptyFeedbackUnregisteredUser,
  TResponseFeedback,
} from 'screens/feedback';

const feedbackApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllFeedbacks: builder.query<TResponseFeedback[], number | string>({
      query: competenceId => ({
        url: `/feedback/all/${competenceId}`,
        method: 'GET',
      }),
      providesTags: ['feedback'],
      transformResponse: (response: TResponseFeedback[]) => response,
    }),
    getFeedbackById: builder.query<TResponseFeedback, number | string>({
      query: id => ({
        url: `/feedback/${id}`,
        method: 'GET',
      }),
      providesTags: ['feedback'],
      transformResponse: (response: TResponseFeedback) => response,
    }),
    createFeedback: builder.mutation<TResponseFeedback, TNewCompletedFeedback>({
      query: formData => ({
        url: '/feedback',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['feedback'],
      transformResponse: (response: TResponseFeedback) => response,
    }),
    sendEmailReceiveFeedbackForUnregisteredUser: builder.mutation<
      void,
      TNewEmptyFeedbackUnregisteredUser
    >({
      query: formData => ({
        url: '/feedback/send-email/unregistered-user',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['feedback'],
    }),
    sendEmailReceiveFeedbackForRegisteredUser: builder.mutation<
      void,
      TNewEmptyFeedbackRegisteredUser
    >({
      query: formData => ({
        url: '/feedback/send-email/registered-user',
        method: 'POST',
        body: formData,
        credentials: 'include',
      }),
      invalidatesTags: ['feedback'],
    }),
  }),
});

export const {
  useLazyGetAllFeedbacksQuery,
  useCreateFeedbackMutation,
  useLazyGetFeedbackByIdQuery,
  useSendEmailReceiveFeedbackForUnregisteredUserMutation,
  useSendEmailReceiveFeedbackForRegisteredUserMutation,
} = feedbackApi;
