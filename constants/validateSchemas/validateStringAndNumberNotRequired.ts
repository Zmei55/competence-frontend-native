import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateStringAndNumberNotRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  pattern: {
    value: /^[A-ZА-ЯЁäöüß0-9(), ._%+-]+$/i,
    message: 'May contain letters and numbers.',
  },
};
