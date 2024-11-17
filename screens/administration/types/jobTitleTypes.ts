export type TJobTitle = {
	id: number;
	name: string;
};

export type TNewJobTitleForm = Pick<TJobTitle, 'name'>;
