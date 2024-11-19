import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'screens/app';

import { useSendEmailReceiveFeedbackForUnregisteredUserMutation } from 'redux/feedback/feedbackApi';
import { resetFeedbackError, saveFeedbackError } from 'redux/feedback';
import { TNewEmptyFeedbackUnregisteredUser } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useSendFeedbackRequestUnregisteredUser = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [
    sendFeedbackRequestUnregisteredUser,
    { isLoading: isSendingFeedbackRequestUnregisteredUserLoading },
  ] = useSendEmailReceiveFeedbackForUnregisteredUserMutation();

  const handleSendFeedbackRequestUnregisteredUser = async (
    values: TNewEmptyFeedbackUnregisteredUser
  ): Promise<void> => {
    try {
      await sendFeedbackRequestUnregisteredUser(values).unwrap();
      dispatch(resetFeedbackError());
      // navigate('/feedback');
    } catch (error) {
      dispatch(saveFeedbackError(customErrorHandler(error)));
    }
  };

  return {
    handleSendFeedbackRequestUnregisteredUser,
    isSendingFeedbackRequestUnregisteredUserLoading,
  };
};
