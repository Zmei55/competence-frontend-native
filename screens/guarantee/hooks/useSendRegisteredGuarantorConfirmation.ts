import { useNavigate } from 'react-router-dom';
import { useAppDispatch, saveSnackbarError } from 'src/app';
import {
	useSendRegisteredGuarantorConfirmationMutation,
	useSendNotificationEmailToRegisteredGuarantorMutation,
} from '..';
import { customErrorHandler } from 'shared';

export const useSendRegisteredGuarantorConfirmation = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [sendNewConfirmationRegistered, { isLoading: isSendConfirmationRegisteredLoading }] =
		useSendRegisteredGuarantorConfirmationMutation();
	const [sendNotificationEmail] = useSendNotificationEmailToRegisteredGuarantorMutation();

	const handleSendNewConfirmationRegistered = async (
		competaId: number,
		guarantorProfileId: number | string
	): Promise<void> => {
		try {
			const newConfirmation = {
				competaId,
				guarantorProfileId,
			};

			const confirmation = await sendNewConfirmationRegistered(newConfirmation).unwrap();
			await sendNotificationEmail(confirmation.id).unwrap();
			navigate('/guarantee');
		} catch (error) {
			dispatch(saveSnackbarError(customErrorHandler(error)));
		}
	};

	return {
		handleSendNewConfirmationRegistered,
		isSendConfirmationRegisteredLoading,
	};
};
