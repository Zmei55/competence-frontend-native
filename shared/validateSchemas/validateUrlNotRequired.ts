import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateUrlNotRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  pattern: {
    value: /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-?=%.]+/gi,
    message: 'The url format does not match.',
  },
};
