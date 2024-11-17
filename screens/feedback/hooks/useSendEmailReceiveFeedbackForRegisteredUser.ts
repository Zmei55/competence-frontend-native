import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app';
import { resetFeedbackError, useSendEmailReceiveFeedbackForRegisteredUserMutation } from '../redux';
import { useState } from 'react';
import { customErrorHandler } from 'shared';

export const useSendFeedbackRequestRegisteredUser = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [
		sendFeedbackRequestRegisteredUser,
		{ isLoading: isSendingFeedbackRequestRegisteredUserLoading },
	] = useSendEmailReceiveFeedbackForRegisteredUserMutation();
	const [sendFeedbackRequestRegisteredUserError, setSendFeedbackRequestRegisteredUserError] =
		useState<string | null>(null);

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
			navigate('/feedback');
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
