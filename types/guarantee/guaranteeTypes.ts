import { Dayjs } from 'dayjs';
import {
  TEACHER,
  STUDENT,
  EMPLOYEE,
  GRADUATE,
  EXTERNAL_PERSON,
  CONFIRMED,
  NOT_CONFIRMED,
  REJECTED,
  DEFAULT_STRING,
} from '@/constants/Constants';

type Guarantor = {
  id: number | string;
  firstName: string;
  lastName: string;
  profession: string;
  level: string;
  statusInSchool: typeof TEACHER | typeof STUDENT | typeof EMPLOYEE;
  avatarImageData: string | null;
};

export type TGuarantor = Guarantor;

export type TGuaranteeSlice = {
  guarantor: TGuarantor | null;
  errorMessage: string | null;
};

export type TGuarantorFilter = {
  filter: string | null;
  statusInSchool:
    | typeof TEACHER
    | typeof STUDENT
    | typeof GRADUATE
    | typeof EMPLOYEE
    | typeof EXTERNAL_PERSON
    | typeof DEFAULT_STRING
    | null;
};

export type TCompetaConfirmationRegistered = {
  id: number;
  competa: {
    id: number;
    title: string;
  };
  guarantorProfile: {
    id: number | string;
    firstName: string;
    lastName: string;
    avatarImageData: string | null;
    skillLevelId: number | null;
  };
  statusCompetaConfirmation:
    | typeof CONFIRMED
    | typeof NOT_CONFIRMED
    | typeof REJECTED;
  requestTime: Dayjs;
  confirmedTime: Dayjs;
};

export type TNewCompetaConfirmationRegistered = {
  competaId: number;
  guarantorProfileId: number | string;
};

export type TCompetaConfirmationUnregistered = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  competaId: number;
};

export type TNewCompetaConfirmationUnregistered = Omit<
  TCompetaConfirmationUnregistered,
  'id'
>;
