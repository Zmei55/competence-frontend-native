import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCreateFeedbackMutation } from 'redux/feedback/feedbackApi';
import { customErrorHandler } from 'shared/helpers';

export const useCreateFeedback = () => {
  const { navigate } = useNavigation();
  const [createFeedback, { isLoading: isFeedbackLoading }] =
    useCreateFeedbackMutation();
  const [isCreateFeedbackError, setIsCreateFeedbackError] = useState<
    string | null
  >(null);

  const handleCreateFeedback = async (
    competaId: number,
    review: string,
    rating: number,
    isBelieve: boolean | null
  ): Promise<string | null> => {
    try {
      await createFeedback({
        competaId,
        review,
        rating,
        isBelieve,
      }).unwrap();
      // navigate('/my-profile');
      return null;
    } catch (error) {
      const errorMessage = customErrorHandler(error);
      setIsCreateFeedbackError(errorMessage);
      return errorMessage;
    }
  };

  return { handleCreateFeedback, isFeedbackLoading, isCreateFeedbackError };
};
