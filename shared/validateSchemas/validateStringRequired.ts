import { SEPARATOR_MARK } from 'shared';

export const validateStringRequired = (value: string) => {
	const errors: string[] | null = [];
	if (!value) errors.push('This field is required.');
	if (!/^[A-ZА-ЯЁäöüß]+$/i.test(value)) errors.push('May contain letters.');
	if (typeof value !== 'string') errors.push('This must be a string.');
	return errors.join(SEPARATOR_MARK);
};
