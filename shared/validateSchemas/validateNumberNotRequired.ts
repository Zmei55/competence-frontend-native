import { DEFAULT_STRING, SEPARATOR_MARK } from 'shared';

export const validateNumberNotRequired = (value: string) => {
	const errors: string[] | null = [];
	if (value && value !== DEFAULT_STRING && !/^[0-9]+$/i.test(value))
		errors.push('May contain numbers.');
	if (
		value &&
		value !== DEFAULT_STRING &&
		(!Number.isInteger(parseInt(value)) || typeof parseInt(value) !== 'number')
	)
		errors.push('This must be a numbers.');
	return errors.join(SEPARATOR_MARK);
};
