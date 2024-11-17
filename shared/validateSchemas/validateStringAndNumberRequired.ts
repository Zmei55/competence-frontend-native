import { DEFAULT_STRING, SEPARATOR_MARK } from 'shared';

export const validateStringAndNumberRequired = (value: string) => {
	const errors: string[] | null = [];
	if (!value) errors.push('This field is required.');
	if (!/^[A-ZА-ЯЁäöüß0-9(), ._%+-]+$/i.test(value) && value !== DEFAULT_STRING)
		errors.push('May contain letters and numbers.');
	if (typeof value !== 'string') errors.push('This must be a string.');
	return errors.join(SEPARATOR_MARK);
};
