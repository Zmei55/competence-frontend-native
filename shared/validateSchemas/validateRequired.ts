import { DEFAULT_STRING, SEPARATOR_MARK } from 'shared/Constants';

export const validateRequired = (value: string) => {
  const errors: string[] | null = [];
  if (!value || value === DEFAULT_STRING)
    errors.push('This field is required.');
  return errors.join(SEPARATOR_MARK);
};
