type EducationType = {
	id: number;
	description: string;
};

export type TEducationType = Pick<EducationType, 'id' | 'description'>;
