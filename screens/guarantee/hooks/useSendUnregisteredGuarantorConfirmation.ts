import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from 'screens/app';
import { saveSnackbarError } from 'redux/app';
import { useSendUnregisteredGuarantorConfirmationMutation } from 'redux/guarantee/guaranteeApi';
import { TNewCompetaConfirmationUnregistered } from '..';
import { customErrorHandler } from 'shared/helpers';

export const useSendUnregisteredGuarantorConfirmation = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation();
  const [sendNewConfirmationUnregistered] =
    useSendUnregisteredGuarantorConfirmationMutation();

  const handleSendNewConfirmationUnregistered = async (
    values: TNewCompetaConfirmationUnregistered
  ): Promise<void> => {
    try {
      await sendNewConfirmationUnregistered(values).unwrap();
      // navigate('/guarantee');
    } catch (error) {
      dispatch(saveSnackbarError(customErrorHandler(error)));
    }
  };

  return { handleSendNewConfirmationUnregistered };
};
