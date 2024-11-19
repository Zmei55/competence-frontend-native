import { SEPARATOR_MARK } from 'shared/Constants';

export const validateDateRequired = (value: string) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (
    value &&
    !/([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})/.test(
      value
    )
  )
    errors.push('The date format does not match.');
  return errors.join(SEPARATOR_MARK);
};
