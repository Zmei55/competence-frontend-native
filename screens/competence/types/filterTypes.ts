export type TFilter = {
	title: string;
	type: string;
	industry: string | number;
	status: string;
};

export type TFilterCompetasAllUsers = {
	title: string;
	type: string;
	industry: string | number;
	author: string;
};

export type THandleFilter = {
	target: {
		name: string;
		value: unknown;
	};
};

export type THandleCompetasAllUsersFilter = {
	target: {
		name: keyof TFilterCompetasAllUsers;
		value: unknown;
	};
};
