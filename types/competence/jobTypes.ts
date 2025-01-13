import { Dayjs } from 'dayjs';
import { TNewCompetence } from '.';

export type TJob = {
  id: number;
  industryId: number | null;
  skillLevelId: number | null;
  companyName: string | null;
  jobStartDate: Dayjs | null;
  jobEndDate: Dayjs | null;
  currentJob: boolean;
  resultUrl: string | null;
  jobTitleId: number | null;
  achievements: string | null;
};

export type TNewJob = TNewCompetence & {
  industryId: string | null;
  skillLevelId: string | null;
  companyName: string | null;
  jobStartDate: Dayjs | null;
  jobEndDate: Dayjs | null;
  currentJob: boolean;
  resultUrl: string | null;
  jobTitleId: string | null;
  achievements: string | null;
};
