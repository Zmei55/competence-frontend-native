import { DEFAULT_STRING, SEPARATOR_MARK } from 'shared/Constants';

export const validateStringAndNumberNotRequired = (value: string) => {
  const errors: string[] | null = [];
  if (
    value &&
    !/^[A-ZА-ЯЁäöüß0-9(), ._%+-]+$/i.test(value) &&
    value !== DEFAULT_STRING
  )
    errors.push('May contain letters and numbers.');
  if (value && typeof value !== 'string') errors.push('This must be a string.');
  return errors.join(SEPARATOR_MARK);
};
