import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateNameNotRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  pattern: {
    value: /^[A-ZА-ЯЁäöüß -]+$/i,
    message: 'May contain letters.',
  },
};
