import { useState } from 'react';

import { useSendNewStatusConfirmationMutation } from '..';
import { customErrorHandler } from 'shared';

export const useSendNewStatusConfirmation = () => {
	const [sendNewStatus, { isLoading: isSendNewStatusLoading }] =
		useSendNewStatusConfirmationMutation();
	const [sendNewStatusError, setSendNewStatusError] = useState<string | null>(null);

	const handleSendNewStatusConfirmation = async (
		competaConfirmationId: number,
		newStatus: string
	) => {
		try {
			await sendNewStatus({ competaConfirmationId, newStatus }).unwrap();
		} catch (error) {
			setSendNewStatusError(customErrorHandler(error));
		}
	};

	return {
		handleSendNewStatusConfirmation,
		isSendNewStatusLoading,
		sendNewStatusError,
	};
};
