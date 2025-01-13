import { useAppDispatch } from '@/hooks';
import { saveSnackbarError } from '@/redux/app';
import {
  useSendRegisteredGuarantorConfirmationMutation,
  useSendNotificationEmailToRegisteredGuarantorMutation,
} from '@/redux/guarantee/guaranteeApi';
import { customErrorHandler } from '@/helpers';

export const useSendRegisteredGuarantorConfirmation = () => {
  const dispatch = useAppDispatch();
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
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return {
    handleSendNewConfirmationRegistered,
    isSendConfirmationRegisteredLoading,
  };
};
