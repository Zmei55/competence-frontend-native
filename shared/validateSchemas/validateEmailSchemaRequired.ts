import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateEmailSchemaRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address.',
  },
  minLength: {
    value: 3,
    message: 'Is too short: 3 characters minimum.',
  },
};
