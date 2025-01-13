import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validateNicknameSchemaRequired: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /^[A-ZА-ЯЁ0-9 ._%+-]+$/i,
    message:
      'May contain Latin letters, numbers and special characters "!#$@%_".',
  },
  minLength: {
    value: 3,
    message: 'Is too short: 3 characters minimum.',
  },
};
