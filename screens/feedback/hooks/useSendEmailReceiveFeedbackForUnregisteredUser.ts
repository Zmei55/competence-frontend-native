import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app';
import {
	resetFeedbackError,
	saveFeedbackError,
	useSendEmailReceiveFeedbackForUnregisteredUserMutation,
} from '../redux';
import { TNewEmptyFeedbackUnregisteredUser } from '../types';
import { customErrorHandler } from 'shared';

export const useSendFeedbackRequestUnregisteredUser = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
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
			navigate('/feedback');
		} catch (error) {
			dispatch(saveFeedbackError(customErrorHandler(error)));
		}
	};

	return {
		handleSendFeedbackRequestUnregisteredUser,
		isSendingFeedbackRequestUnregisteredUserLoading,
	};
};
