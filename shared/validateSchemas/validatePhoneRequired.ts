import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validatePhoneRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value:
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
    message: 'The phone format does not match.',
  },
};
