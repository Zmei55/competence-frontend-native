type LanguageLevel = {
	id: number;
	description: string;
};

export type TLanguageLevel = Pick<LanguageLevel, 'id' | 'description'>;
