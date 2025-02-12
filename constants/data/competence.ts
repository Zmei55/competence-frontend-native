import dayjs from 'dayjs';
import { TCompetence } from '@/types/competence';

export const competenceEducation: TCompetence = {
  id: 1,
  title: 'Education Title 1',
  description: 'Description 1',
  location: null,
  trustIndex: 0.75,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-08-12'),
  competenceDate: dayjs('2023-07-11'),
  imageData: null,
  imageId: 48,
  userProfileId: 2,
  competaType: 'Education',
  hardSkill: null,
  jobSkill: null,
  educationSkill: {
    id: 1,
    name: 'Education institution 1',
    educationTypeId: 5,
    professionId: 2,
    resultUrl: 'https://www.google.de/',
  },
  documentInfoList: [
    {
      id: 2,
      originalName: 'name_file.pdf',
      description: '1',
      previewImageId: 50,
    },
  ],
  public: true,
  mutable: false,
  includedInCV: true,
  confirmed: true,
  feedbacks: null,
};

export const competenceJob: TCompetence = {
  id: 17,
  title: 'Job Title 13',
  description: 'Description 13',
  location: null,
  trustIndex: 0.0,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-08-14'),
  competenceDate: null,
  imageData: null,
  imageId: null,
  userProfileId: 2,
  competaType: 'Job skill',
  hardSkill: null,
  jobSkill: {
    id: 1,
    skillLevelId: 3,
    companyName: 'Company 13',
    jobStartDate: dayjs('2016-01-13'),
    jobEndDate: dayjs('2024-08-13'),
    resultUrl: 'url',
    jobTitleId: 3,
    industryId: 1,
    achievements: null,
    currentJob: false,
  },
  educationSkill: null,
  documentInfoList: [],
  public: true,
  mutable: true,
  includedInCV: true,
  confirmed: false,
  feedbacks: null,
};

export const competenceSoftSkill: TCompetence = {
  id: 4,
  title: 'Softskill Title 2',
  description: 'Description 2 admin',
  location: null,
  trustIndex: 1.0,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-08-12'),
  competenceDate: dayjs('2023-02-11'),
  imageData: null,
  imageId: null,
  userProfileId: 2,
  competaType: 'Soft skill',
  hardSkill: null,
  jobSkill: null,
  educationSkill: null,
  documentInfoList: [],
  public: false,
  mutable: false,
  includedInCV: false,
  confirmed: true,
  feedbacks: null,
};

export const competenceHardSkillCustom: TCompetence = {
  id: 29,
  title: 'Hard skill Title 19',
  description: 'Description 19 admin',
  location: null,
  trustIndex: 0.0,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-08-30'),
  competenceDate: dayjs('2020-07-30'),
  imageData: null,
  imageId: null,
  userProfileId: 2,
  competaType: 'Hard skill - custom',
  hardSkill: {
    id: 2,
    hardSkillCustom: {
      id: 1,
      industryId: 1,
      skillLevelId: 3,
      resultUrl: 'www.test.com',
    },
    hardSkillLanguage: null,
    hardSkillDriverLicence: null,
  },
  jobSkill: null,
  educationSkill: null,
  documentInfoList: [],
  public: false,
  mutable: true,
  includedInCV: false,
  confirmed: false,
  feedbacks: null,
};

export const competenceHardSkillLanguage: TCompetence = {
  id: 34,
  title: 'Русский язык',
  description: null,
  location: null,
  trustIndex: 0.0,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-09-01'),
  competenceDate: null,
  imageData: null,
  imageId: null,
  userProfileId: 2,
  competaType: 'Hard skill - language',
  hardSkill: {
    id: 4,
    hardSkillCustom: null,
    hardSkillLanguage: {
      id: 1,
      languageId: 8,
      languageLevelId: 9,
    },
    hardSkillDriverLicence: null,
  },
  jobSkill: null,
  educationSkill: null,
  documentInfoList: [],
  public: true,
  mutable: true,
  includedInCV: true,
  confirmed: false,
  feedbacks: null,
};

export const competenceHardSkillDriver: TCompetence = {
  id: 36,
  title: 'PKW',
  description: null,
  location: null,
  trustIndex: 0.0,
  avgMark: 0.0,
  views: 0,
  reviews: 0,
  dateOfCreation: dayjs('2024-09-01'),
  competenceDate: dayjs('2008-02-01'),
  imageData: null,
  imageId: null,
  userProfileId: 2,
  competaType: 'Hard skill - driver licence',
  hardSkill: {
    id: 6,
    hardSkillCustom: null,
    hardSkillLanguage: null,
    hardSkillDriverLicence: {
      id: 1,
      driverLicenceId: 6,
      skillLevelId: 4,
    },
  },
  jobSkill: null,
  educationSkill: null,
  documentInfoList: [],
  public: true,
  mutable: true,
  includedInCV: true,
  confirmed: false,
  feedbacks: null,
};
