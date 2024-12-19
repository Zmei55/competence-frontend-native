import { Dayjs } from 'dayjs';

import { TEducation, TJob, THardSkill } from '.';
import {
  EDUCATION,
  JOB,
  SOFTSKILL,
  HARDSKILL_CUSTOM,
  HARDSKILL_LANGUAGE,
  HARDSKILL_DRIVERLICENCE,
  DEFAULT_STRING,
} from 'shared/Constants';
import { TResponseFeedback } from 'screens/feedback';

type TLocation = {
  id: number;
  city: string;
  country: string;
};

type Competence = {
  id: number;
  userProfileId: number | string;
  competaType: TCompetenceType;
  title: string | null;
  description: string | null;
  competenceDate: Dayjs | null;
  imageData: string | undefined;
  imageId: number | null;
  public: boolean;
  includedInCV: boolean;
  trustIndex: number;
  confirmed: boolean;
  mutable: boolean;
  avgMark: number;
  reviews: number;
  views: number;
  location: TLocation | null;
  educationSkill: TEducation | null;
  hardSkill: THardSkill | null;
  jobSkill: TJob | null;
  feedbacks: TResponseFeedback[] | null;
};

export type TCompetence = Competence;

export type TCompetenceType =
  | typeof DEFAULT_STRING
  | typeof EDUCATION
  | typeof SOFTSKILL
  | typeof JOB
  | typeof HARDSKILL_CUSTOM
  | typeof HARDSKILL_LANGUAGE
  | typeof HARDSKILL_DRIVERLICENCE;

export type TCompetenceForm = Pick<
  Competence,
  'competaType' | 'title' | 'description' | 'competenceDate'
> & {
  id: number | null;
  isPublic: boolean;
  isIncludedInCV: boolean;
  competaImage: FileList | undefined;
  competaImageError?: string | null;
  name: string | null;
  educationTypeId: string | null;
  professionId: string | null;
  skillLevelId: string | null;
  industryId: string | null;
  companyName: string | null;
  jobStartDate: Dayjs | null;
  jobEndDate: Dayjs | null;
  currentJob: boolean;
  resultUrl: string | null;
  jobTitleId: string | null;
  languageId: string | null;
  languageLevelId: string | null;
  achievements: string | null;
  driverLicenceId: string | null;
};

export type TNewCompetence = Pick<
  Competence,
  'competaType' | 'title' | 'description' | 'competenceDate'
> & {
  id: number | null;
  isPublic: boolean;
  isIncludedInCV: boolean;
  competaImage: FileList | string | undefined;
};

export type TCompetenceFeed = Pick<
  Competence,
  | 'id'
  | 'competaType'
  | 'title'
  | 'competenceDate'
  | 'imageData'
  | 'trustIndex'
  | 'jobSkill'
  | 'hardSkill'
  | 'educationSkill'
> & {
  authorFirstName: string;
  authorLastName: string;
  statusInSchool: string | null;
};

export type TCompetenceSlice = {
  competence: TCompetence | null;
  competences: TCompetence[] | null;
  isCompetenceLoading: boolean;
  errorMessage: string | null;
  showModal: boolean;
};
