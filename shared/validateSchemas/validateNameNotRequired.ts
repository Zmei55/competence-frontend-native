import { SEPARATOR_MARK } from 'shared';

export const validateNameNotRequired = (value: string) => {
	const errors: string[] | null = [];
	if (value !== '' && !/^[A-ZА-ЯЁäöüß -]+$/i.test(value)) errors.push('May contain letters.');
	if (typeof value !== 'string') errors.push('This must be a string.');
	return errors.join(SEPARATOR_MARK);
};
