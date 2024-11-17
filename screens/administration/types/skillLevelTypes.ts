type SkillLevel = {
	id: number;
	description: string;
};

export type TSkillLevel = Pick<SkillLevel, 'id' | 'description'>;
