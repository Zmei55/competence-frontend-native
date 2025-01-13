import { TCompetence } from '../competence';

export type TAdminCompetence = Pick<
  TCompetence,
  | 'id'
  | 'competaType'
  | 'title'
  | 'description'
  | 'competenceDate'
  | 'imageData'
  | 'trustIndex'
  | 'confirmed'
>;
