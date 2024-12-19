import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import {
  useSendRegisteredGuarantorConfirmationMutation,
  useSendNotificationEmailToRegisteredGuarantorMutation,
} from 'redux/guarantee/guaranteeApi';
import { customErrorHandler } from 'shared/helpers';

export const useSendRegisteredGuarantorConfirmation = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [
    sendNewConfirmationRegistered,
    { isLoading: isSendConfirmationRegisteredLoading },
  ] = useSendRegisteredGuarantorConfirmationMutation();
  const [sendNotificationEmail] =
    useSendNotificationEmailToRegisteredGuarantorMutation();

  const handleSendNewConfirmationRegistered = async (
    competaId: number,
    guarantorProfileId: number | string
  ): Promise<void> => {
    try {
      const newConfirmation = {
        competaId,
        guarantorProfileId,
      };

      const confirmation =
        await sendNewConfirmationRegistered(newConfirmation).unwrap();
      await sendNotificationEmail(confirmation.id).unwrap();
      // navigate('/guarantee');
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleSendNewConfirmationRegistered,
    isSendConfirmationRegisteredLoading,
  };
};
