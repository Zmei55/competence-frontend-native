import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateNumberNotRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  pattern: {
    value: /^[0-9]+$/i,
    message: 'May contain numbers.',
  },
};
