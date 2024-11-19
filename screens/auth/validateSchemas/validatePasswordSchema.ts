import { SEPARATOR_MARK } from 'shared/Constants';

export const validatePasswordSchema = (value: string) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (!/^(?=.*[a-zA-Z])/i.test(value))
    errors.push('Must contain Latin letters.');
  if (!/^(?=.*[a-z])/.test(value))
    errors.push('Must contain at least 1 lowercase letter.');
  if (!/^(?=.*[A-Z])/.test(value))
    errors.push('Must contain at least 1 uppercase letter.');
  if (!/^(?=.*[0-9])/.test(value))
    errors.push('Must contain at least 1 number.');
  if (!/^(?=.*[!#$@%])/.test(value))
    errors.push('Must contain at least 1 special character (!#$@%).');
  if (value.length <= 8) errors.push('Is too short: 8 characters minimum.');
  if (value.length > 256) errors.push('Is too long: maximum 255 characters.');
  return errors.join(SEPARATOR_MARK);
};
