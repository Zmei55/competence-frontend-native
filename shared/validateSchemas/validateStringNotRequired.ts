import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateStringNotRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  pattern: {
    value: /^[A-ZА-ЯäöüßЁ -]+$/i,
    message: 'May contain letters.',
  },
};
