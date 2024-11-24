import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateStringAndNumberRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /^[A-ZА-ЯЁäöüß0-9(), ._%+-]+$/i,
    message: 'May contain letters and numbers.',
  },
};
