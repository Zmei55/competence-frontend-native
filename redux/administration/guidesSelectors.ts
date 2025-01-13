import { RootState } from '../store';
import {
  TDriverLicence,
  TEducationType,
  TIndustry,
  TJobTitle,
  TLanguage,
  TLanguageLevel,
  TProfession,
  TSkillLevel,
} from '@/types/administration';

export const driverLicenceSelector = (
  state: RootState
): TDriverLicence[] | null => state.guides.guides.driverLicences;
export const educationTypeSelector = (
  state: RootState
): TEducationType[] | null => state.guides.guides.educationTypes;
export const industryListSelector = (state: RootState): TIndustry[] | null =>
  state.guides.guides.industries;
export const jobTitleListSelector = (state: RootState): TJobTitle[] | null =>
  state.guides.guides.jobTitles;
export const languageSelector = (state: RootState): TLanguage[] | null =>
  state.guides.guides.languages;
export const languageLevelSelector = (
  state: RootState
): TLanguageLevel[] | null => state.guides.guides.languageLevels;
export const professionListSelector = (
  state: RootState
): TProfession[] | null => state.guides.guides.professions;
export const skillLevelSelector = (state: RootState): TSkillLevel[] | null =>
  state.guides.guides.skillLevels;
