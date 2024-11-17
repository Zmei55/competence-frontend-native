import { useNavigate } from 'react-router-dom';
import { useCreateFeedbackMutation } from '../redux';
import { customErrorHandler } from 'shared';
import { useState } from 'react';

export const useCreateFeedback = () => {
	const navigate = useNavigate();
	const [createFeedback, { isLoading: isFeedbackLoading }] = useCreateFeedbackMutation();
	const [isCreateFeedbackError, setIsCreateFeedbackError] = useState<string | null>(null);

	const handleCreateFeedback = async (
		competaId: number,
		review: string,
		rating: number,
		isBelieve: boolean | null
	): Promise<string | null> => {
		try {
			await createFeedback({
				competaId,
				review,
				rating,
				isBelieve,
			}).unwrap();
			navigate('/my-profile');
			return null;
		} catch (error) {
			const errorMessage = customErrorHandler(error);
			setIsCreateFeedbackError(errorMessage);
			return errorMessage;
		}
	};

	return { handleCreateFeedback, isFeedbackLoading, isCreateFeedbackError };
};
