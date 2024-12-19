import { TNewCompetence } from '.';

export type TEducation = {
  id: number;
  educationTypeId: number | null;
  name: string | null;
  professionId: number | null;
  resultUrl: string | null;
};

export type TNewEducation = TNewCompetence & {
  name: string | null; // education institution name
  educationTypeId: string | null;
  professionId: string | null;
  resultUrl: string | null;
};
