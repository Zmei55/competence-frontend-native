import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateStringRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /^[A-ZА-ЯЁäöüß]+$/i,
    message: 'May contain letters.',
  },
};
