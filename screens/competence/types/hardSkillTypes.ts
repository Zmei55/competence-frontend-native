import { TNewCompetence } from '.';

export type THardSkill = {
	id: number;
	hardSkillCustom: THardSkillCustom | null;
	hardSkillLanguage: THardSkillLanguage | null;
	hardSkillDriverLicence: THardSkillDriverLicence | null;
};

type THardSkillCustom = {
	id: number;
	industryId: number | null;
	skillLevelId: number | null;
	resultUrl: string | null;
};

type THardSkillLanguage = {
	id: number;
	languageId: number | null;
	languageLevelId: number | null;
};

type THardSkillDriverLicence = {
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
