import { SEPARATOR_MARK } from 'shared/Constants';

export const validatePasswordRepeatSchema = (
  value: string,
  newPassword: string
) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (value !== newPassword)
    errors.push('The field must match the new password.');
  return errors.join(SEPARATOR_MARK);
};
