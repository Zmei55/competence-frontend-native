import { SEPARATOR_MARK } from 'shared/Constants';

export const validatePhoneRequired = (value: string) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (
    !/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/.test(
      value
    )
  )
    errors.push('The phone format does not match.');
  if (typeof value !== 'string') errors.push('This must be a string.');
  return errors.join(SEPARATOR_MARK);
};
