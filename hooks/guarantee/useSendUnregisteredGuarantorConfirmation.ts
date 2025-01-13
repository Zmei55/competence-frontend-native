import { saveSnackbarError } from '@/redux/app';
import { useSendUnregisteredGuarantorConfirmationMutation } from '@/redux/guarantee/guaranteeApi';
import { useAppDispatch } from '@/hooks';
import { TNewCompetaConfirmationUnregistered } from '@/types/guarantee';
import { customErrorHandler } from '@/helpers';

export const useSendUnregisteredGuarantorConfirmation = () => {
  const dispatch = useAppDispatch();
  const [sendNewConfirmationUnregistered] =
    useSendUnregisteredGuarantorConfirmationMutation();

  const handleSendNewConfirmationUnregistered = async (
    values: TNewCompetaConfirmationUnregistered
  ): Promise<void> => {
    try {
      await sendNewConfirmationUnregistered(values).unwrap();
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleSendNewConfirmationUnregistered };
};
