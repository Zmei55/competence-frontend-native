import { DEFAULT_STRING, SEPARATOR_MARK } from 'shared/Constants';

export const validateStringNotRequired = (value: string) => {
  const errors: string[] | null = [];
  if (value && !/^[A-ZА-ЯäöüßЁ -]+$/i.test(value) && value !== DEFAULT_STRING)
    errors.push('May contain letters.');
  if (value && typeof value !== 'string') errors.push('This must be a string.');
  return errors.join(SEPARATOR_MARK);
};
