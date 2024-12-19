import { useState } from 'react';
import { useLazyGetAllFeedbacksQuery } from 'redux/feedback/feedbackApi';
import { TResponseFeedback } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useGetAllFeedbacks = () => {
  const [getAllFeedbacks, { isFetching: isFeedbacksLoading }] =
    useLazyGetAllFeedbacksQuery();
  const [feedbackList, setFeedbackList] = useState<TResponseFeedback[] | null>(
    null
  );
  const [getAllFeedbacksError, setGetAllFeedbacksError] = useState<
    string | null
  >(null);

  const handleGetAllFeedbacks = async (competaId: number) => {
    try {
      const allFeedbacks = await getAllFeedbacks(competaId).unwrap();
      setFeedbackList(allFeedbacks);
    } catch (error) {
      setGetAllFeedbacksError(customErrorHandler(error));
    }
  };

  return {
    feedbackList,
    handleGetAllFeedbacks,
    isFeedbacksLoading,
    getAllFeedbacksError,
  };
};
