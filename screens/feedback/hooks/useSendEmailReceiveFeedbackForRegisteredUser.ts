import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch } from 'screens/app';
import { useSendEmailReceiveFeedbackForRegisteredUserMutation } from 'redux/feedback/feedbackApi';
import { resetFeedbackError } from 'redux/feedback';
import { customErrorHandler } from 'shared/helpers';

export const useSendFeedbackRequestRegisteredUser = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [
    sendFeedbackRequestRegisteredUser,
    { isLoading: isSendingFeedbackRequestRegisteredUserLoading },
  ] = useSendEmailReceiveFeedbackForRegisteredUserMutation();
  const [
    sendFeedbackRequestRegisteredUserError,
    setSendFeedbackRequestRegisteredUserError,
  ] = useState<string | null>(null);

  const handleSendFeedbackRequestRegisteredUser = async (
    competaId: number,
    userProfileId: number
  ): Promise<void> => {
    try {
      const newRequest = {
        competaId,
        userProfileId,
      };

      await sendFeedbackRequestRegisteredUser(newRequest).unwrap();
      dispatch(resetFeedbackError());
      // navigate('/feedback');
    } catch (error) {
      setSendFeedbackRequestRegisteredUserError(customErrorHandler(error));
    }
  };

  return {
    handleSendFeedbackRequestRegisteredUser,
    isSendingFeedbackRequestRegisteredUserLoading,
    sendFeedbackRequestRegisteredUserError,
  };
};
