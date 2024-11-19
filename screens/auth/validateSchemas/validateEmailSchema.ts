import { SEPARATOR_MARK } from 'shared/Constants';

export const validateEmailSchema = (value: string) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    errors.push('Invalid email address.');
  if (value.length < 3) errors.push('Is too short: 3 characters minimum.');
  return errors.join(SEPARATOR_MARK);
};
