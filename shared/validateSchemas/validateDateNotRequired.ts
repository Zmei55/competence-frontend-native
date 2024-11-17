import { SEPARATOR_MARK } from 'shared';

export const validateDateNotRequired = (value: string) => {
	const errors: string[] | null = [];
	if (
		value &&
		!/([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})/.test(
			value
		)
	)
		errors.push('The date format does not match.');
	return errors.join(SEPARATOR_MARK);
};
