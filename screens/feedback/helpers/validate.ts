import { TNewCompletedFeedback } from '..';

interface TNewCompletedFeedbackErrors {
  rating?: string;
}

export const validateFeedbackForm = (
  values: TNewCompletedFeedback
): TNewCompletedFeedbackErrors => {
  const errors: TNewCompletedFeedbackErrors = {};

  if (values.rating === null || values.rating === undefined) {
    errors.rating = 'This is a required field';
  } else if (values.rating < 1 || values.rating > 5) {
    errors.rating = 'Rating must be between 1 and 5';
  }

  return errors;
};
