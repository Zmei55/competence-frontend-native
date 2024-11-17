import { useNavigate } from 'react-router-dom';
import { useAppDispatch, saveSnackbarError } from 'src/app';
import {
	useSendUnregisteredGuarantorConfirmationMutation,
	TNewCompetaConfirmationUnregistered,
} from '..';
import { customErrorHandler } from 'shared';

export const useSendUnregisteredGuarantorConfirmation = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [sendNewConfirmationUnregistered] = useSendUnregisteredGuarantorConfirmationMutation();

	const handleSendNewConfirmationUnregistered = async (
		values: TNewCompetaConfirmationUnregistered
	): Promise<void> => {
		try {
			await sendNewConfirmationUnregistered(values).unwrap();
			navigate('/guarantee');
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return { handleSendNewConfirmationUnregistered };
};
