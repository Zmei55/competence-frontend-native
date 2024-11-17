import { isErrorWithMessage } from 'shared';

export const customErrorHandler = (error: unknown) => {
	if (isErrorWithMessage(error) && error.status >= 400 && error.status < 500) {
		return error.data.message;
	}
	if (error instanceof Error) {
		return error.message;
	}
	if (isErrorWithMessage(error) && error.status >= 500) {
		return `The server is not available. Try again later. Error code ${error.status}`;
	}
	return 'Something went wrong. Try again later.';
};
