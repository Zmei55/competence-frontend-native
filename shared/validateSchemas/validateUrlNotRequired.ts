import { SEPARATOR_MARK } from 'shared';

export const validateUrlNotRequired = (value: string) => {
	const errors: string[] | null = [];
	if (value && !/(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/gi.test(value.trim()))
		errors.push('The url format does not match.');
	return errors.join(SEPARATOR_MARK);
};
