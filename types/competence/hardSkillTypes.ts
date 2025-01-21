import { TNewCompetence } from '.';

export type THardSkill = {
  id: number;
  hardSkillCustom: THardSkillCustom | null;
  hardSkillLanguage: THardSkillLanguage | null;
  hardSkillDriverLicence: THardSkillDriverLicence | null;
};

export type THardSkillCustom = {
  id: number;
  industryId: number | null;
  skillLevelId: number | null;
  resultUrl: string | null;
};

export type THardSkillLanguage = {
  id: number;
  languageId: number | null;
  languageLevelId: number | null;
};

export type THardSkillDriverLicence = {
  id: number;
  driverLicenceId: number | null;
  skillLevelId: number | null;
};

export type TNewHardSkill = TNewCompetence & {
  industryId: string | null;
  skillLevelId: string | null;
  resultUrl: string | null;
  languageId: string | null;
  languageLevelId: string | null;
  driverLicenceId: string | null;
};
