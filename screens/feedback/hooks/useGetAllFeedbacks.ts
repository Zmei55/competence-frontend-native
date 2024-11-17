import { useState } from 'react';
import { useLazyGetAllFeedbacksQuery } from '../redux';
import { TResponseFeedback } from '../types';
import { customErrorHandler } from 'shared';

export const useGetAllFeedbacks = () => {
	const [getAllFeedbacks, { isFetching: isFeedbacksloading }] = useLazyGetAllFeedbacksQuery();
	const [feedbackList, setFeedbackList] = useState<TResponseFeedback[] | null>(null);
	const [getAllFeedbacksError, setGetAllFeedbacksError] = useState<string | null>(null);

	const handleGetAllFeedbacks = async (competaId: number) => {
		try {
			const allFeedbacks = await getAllFeedbacks(competaId).unwrap();
			setFeedbackList(allFeedbacks);
		} catch (error) {
			setGetAllFeedbacksError(customErrorHandler(error));
		}
	};

	return { feedbackList, handleGetAllFeedbacks, isFeedbacksloading, getAllFeedbacksError };
};
