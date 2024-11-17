import { useState } from 'react';
import { useLazyGetFeedbackByIdQuery } from '../redux';
import { TResponseFeedback } from '../types';
import { customErrorHandler } from 'shared';

export const useGetFeedbackById = () => {
	const [getFeedback, { isFetching: isFeedbackLoading }] = useLazyGetFeedbackByIdQuery();
	const [feedback, setFeedback] = useState<TResponseFeedback | null>(null);
	const [feedbackByIdError, setFeedbackByIdError] = useState<string | null>(null);

	const handleGetFeedback = async (id: number) => {
		try {
			const feedbackData = await getFeedback(id).unwrap();
			setFeedback(feedbackData);
		} catch (error) {
			setFeedbackByIdError(customErrorHandler(error));
		}
	};

	return {
		handleGetFeedback,
		feedback,
		feedbackByIdError,
		isFeedbackLoading,
	};
};
