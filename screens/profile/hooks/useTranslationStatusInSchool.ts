import { useTranslation } from 'react-i18next';
import {
  STUDENT,
  GRADUATE,
  TEACHER,
  EMPLOYEE,
  EXTERNAL_PERSON,
} from 'shared/Constants';

export const useTranslationStatusInSchool = () => {
  const { t } = useTranslation(['profile']);

  const translationStatusInSchool = (status: string | null) => {
    if (status === STUDENT) return t('student');
    if (status === GRADUATE) return t('graduate');
    if (status === TEACHER) return t('teacher');
    if (status === EMPLOYEE) return t('employee');
    if (status === EXTERNAL_PERSON) return t('externalPerson');
    return null;
  };

  return { translationStatusInSchool };
};
