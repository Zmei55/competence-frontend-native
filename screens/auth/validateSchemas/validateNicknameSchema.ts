import { SEPARATOR_MARK } from 'shared/Constants';

export const validateNicknameSchema = (value: string) => {
  const errors: string[] | null = [];
  if (!value) errors.push('This field is required.');
  if (!/^[A-ZА-ЯЁ0-9 ._%+-]+$/i.test(value))
    errors.push(
      'May contain Latin letters, numbers and special characters "!#$@%_".'
    );
  if (value.length < 3) errors.push('Is too short: 3 characters minimum.');
  return errors.join(SEPARATOR_MARK);
};
