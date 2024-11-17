type Industry = {
	id: number;
	name: string;
};

export type TIndustry = Pick<Industry, 'id' | 'name'>;

export type TNewIndustryForm = Pick<Industry, 'name'>;
