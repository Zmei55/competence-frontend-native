export type TProfession = {
  id: number;
  name: string;
};

export type TNewProfessionForm = Pick<TProfession, 'name'>;
