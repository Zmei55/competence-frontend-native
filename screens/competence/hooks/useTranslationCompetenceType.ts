import { useTranslation } from 'react-i18next';
import {
  EDUCATION,
  SOFTSKILL,
  JOB,
  HARDSKILL_CUSTOM,
  HARDSKILL_LANGUAGE,
  HARDSKILL_DRIVERLICENCE,
} from 'shared/Constants';

export const useTranslationCompetenceType = () => {
  const { t } = useTranslation(['competence']);

  const translationCompetenceType = (type: string | null) => {
    if (type === EDUCATION) return t('competenceType.education');
    if (type === SOFTSKILL) return t('competenceType.softSkill');
    if (type === JOB) return t('competenceType.job');
    if (type === HARDSKILL_CUSTOM)
      return t('competenceType.hardSkill', { context: 'CUSTOM' });
    if (type === HARDSKILL_LANGUAGE)
      return t('competenceType.hardSkill', { context: 'LANGUAGE' });
    if (type === HARDSKILL_DRIVERLICENCE)
      return t('competenceType.hardSkill', { context: 'DRIVERLICENCE' });
    return null;
  };

  return { translationCompetenceType };
};
