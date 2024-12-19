import { FieldValues, RegisterOptions } from 'react-hook-form';

export const validatePasswordSchema: Omit<
  RegisterOptions<FieldValues, string>,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
  required: {
    value: true,
    message: 'This field is required.',
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$@%])/i,
    message:
      'Must contain Latin, at least 1 lowercase, 1 uppercase letters, at least 1 number and at least 1 special character (!#$@%).',
  },
  minLength: {
    value: 8,
    message: 'Is too short: 8 characters minimum.',
  },
  maxLength: {
    value: 256,
    message: 'Is too long: maximum 255 characters.',
  },
};
// export const validatePasswordSchema = (value: string) => {
//   const errors: string[] | null = [];
//   if (!value) errors.push('This field is required.');
//   if (!/^(?=.*[a-zA-Z])/i.test(value))
//     errors.push('Must contain Latin letters.');
//   if (!/^(?=.*[a-z])/.test(value))
//     errors.push('Must contain at least 1 lowercase letter.');
//   if (!/^(?=.*[A-Z])/.test(value))
//     errors.push('Must contain at least 1 uppercase letter.');
//   if (!/^(?=.*[0-9])/.test(value))
//     errors.push('Must contain at least 1 number.');
//   if (!/^(?=.*[!#$@%])/.test(value))
//     errors.push('Must contain at least 1 special character (!#$@%).');
//   if (value.length <= 8) errors.push('Is too short: 8 characters minimum.');
//   if (value.length > 256) errors.push('Is too long: maximum 255 characters.');
//   return errors.join(SEPARATOR_MARK);
// };
