type Language = {
  id: number;
  description: string;
};

export type TLanguage = Pick<Language, 'id' | 'description'>;
