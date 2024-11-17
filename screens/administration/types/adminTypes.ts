import {
	TDriverLicence,
	TEducationType,
	TIndustry,
	TJobTitle,
	TLanguage,
	TLanguageLevel,
	TProfession,
	TSkillLevel,
} from '.';

export type TAdministrationState = {
	administration: boolean;
	errorMessage: string | null;
};

export type TGuidesState = {
	guides: {
		driverLicences: TDriverLicence[] | null;
		educationTypes: TEducationType[] | null;
		industries: TIndustry[] | null;
		jobTitles: TJobTitle[] | null;
		languages: TLanguage[] | null;
		languageLevels: TLanguageLevel[] | null;
		professions: TProfession[] | null;
		skillLevels: TSkillLevel[] | null;
	};
	isIndustryLoading: boolean;
	isJobTitleLoading: boolean;
	isProfessionLoading: boolean;
	errorMessage: string | null;
};
