import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TGuidesState,
  TDriverLicence,
  TEducationType,
  TIndustry,
  TJobTitle,
  TLanguage,
  TLanguageLevel,
  TProfession,
  TSkillLevel,
} from '@/types/administration';

import { professionList } from '@/constants/data/professionList';
import { skillLevelList } from '@/constants/data/skillLevelList';
import { driverLicenceList } from '@/constants/data/driverLicenceList';
import { educationTypeList } from '@/constants/data/educationTypeList';
import { industryList } from '@/constants/data/industryList';
import { jobTitleList } from '@/constants/data/jobTitleList';
import { languageList } from '@/constants/data/languageList';
import { languageLevelList } from '@/constants/data/languageLevelList';

const initialState: TGuidesState = {
  guides: {
    driverLicences: driverLicenceList, // null
    educationTypes: educationTypeList, // null
    industries: industryList, // null
    jobTitles: jobTitleList, // null
    languages: languageList, // null
    languageLevels: languageLevelList, // null
    professions: professionList, // null
    skillLevels: skillLevelList, // null
  },
  isIndustryLoading: false,
  isJobTitleLoading: false,
  isProfessionLoading: false,
  errorMessage: null,
};

const guidesSlice = createSlice({
  name: 'guides',
  initialState,
  reducers: {
    addIndustryInStorage: (state, action: PayloadAction<TIndustry>) => {
      if (state.guides.industries) {
        state.guides.industries.push(action.payload);
      } else {
        state.guides.industries = [];
        state.guides.industries.push(action.payload);
      }
    },
    addJobTitleInStorage: (state, action: PayloadAction<TJobTitle>) => {
      if (state.guides.jobTitles) {
        state.guides.jobTitles.push(action.payload);
      } else {
        state.guides.jobTitles = [];
        state.guides.jobTitles.push(action.payload);
      }
    },
    addProfessionInStorage: (state, action: PayloadAction<TProfession>) => {
      if (state.guides.professions) {
        state.guides.professions.push(action.payload);
      } else {
        state.guides.professions = [];
        state.guides.professions.push(action.payload);
      }
    },
    updateIndustryInStorage: (state, action: PayloadAction<TIndustry>) => {
      const { id } = action.payload;
      if (state.guides.industries)
        state.guides.industries = state.guides.industries.map(i =>
          i.id === id ? { ...i, name: action.payload.name } : i
        );
    },
    updateJobTitleInStorage: (state, action: PayloadAction<TJobTitle>) => {
      const { id } = action.payload;
      if (state.guides.jobTitles)
        state.guides.jobTitles = state.guides.jobTitles.map(i =>
          i.id === id ? { ...i, name: action.payload.name } : i
        );
    },
    updateProfessionInStorage: (state, action: PayloadAction<TProfession>) => {
      const { id } = action.payload;
      if (state.guides.professions)
        state.guides.professions = state.guides.professions.map(i =>
          i.id === id ? { ...i, name: action.payload.name } : i
        );
    },
    saveDriverLicences: (state, action: PayloadAction<TDriverLicence[]>) => {
      state.guides.driverLicences = action.payload;
    },
    saveEducationTypes: (state, action: PayloadAction<TEducationType[]>) => {
      state.guides.educationTypes = action.payload;
    },
    saveIndustryList: (state, action: PayloadAction<TIndustry[]>) => {
      state.guides.industries = action.payload;
    },
    saveJobTitleList: (state, action: PayloadAction<TJobTitle[]>) => {
      state.guides.jobTitles = action.payload;
    },
    saveLanguages: (state, action: PayloadAction<TLanguage[]>) => {
      state.guides.languages = action.payload;
    },
    saveLanguageLevels: (state, action: PayloadAction<TLanguageLevel[]>) => {
      state.guides.languageLevels = action.payload;
    },
    saveProfessionList: (state, action: PayloadAction<TProfession[]>) => {
      state.guides.professions = action.payload;
    },
    saveSkillLevels: (state, action: PayloadAction<TSkillLevel[]>) => {
      state.guides.skillLevels = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('auth/logoutSuccess', () => {
      return initialState;
    });
  },
});

export const {
  saveDriverLicences,
  saveEducationTypes,
  saveIndustryList,
  addIndustryInStorage,
  updateIndustryInStorage,
  saveJobTitleList,
  addJobTitleInStorage,
  updateJobTitleInStorage,
  saveLanguages,
  saveLanguageLevels,
  saveSkillLevels,
  addProfessionInStorage,
  updateProfessionInStorage,
  saveProfessionList,
} = guidesSlice.actions;

export default guidesSlice.reducer;
