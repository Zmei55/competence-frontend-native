import { api } from 'src/app';
import {
	TNewCompletedFeedback,
	TNewEmptyFeedbackRegisteredUser,
	TNewEmptyFeedbackUnregisteredUser,
	TResponseFeedback,
} from '../types';

const feedbackApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllFeedbacks: builder.query<TResponseFeedback[], number | string>({
			query: (competenceId) => ({
				url: `/api/feedback/all/${competenceId}`,
				method: 'GET',
			}),
			providesTags: ['feedback'],
			transformResponse: (response: TResponseFeedback[]) => response,
		}),
		getFeedbackById: builder.query<TResponseFeedback, number | string>({
			query: (id) => ({
				url: `/api/feedback/${id}`,
				method: 'GET',
			}),
			providesTags: ['feedback'],
			transformResponse: (response: TResponseFeedback) => response,
		}),
		createFeedback: builder.mutation<TResponseFeedback, TNewCompletedFeedback>({
			query: (formData) => ({
				url: '/api/feedback',
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
			query: (formData) => ({
				url: '/api/feedback/send-email/unregistered-user',
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
			query: (formData) => ({
				url: '/api/feedback/send-email/registered-user',
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
