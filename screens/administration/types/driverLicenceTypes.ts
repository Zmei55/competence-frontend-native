type DriverLicence = {
	id: number;
	description: string;
};

export type TDriverLicence = Pick<DriverLicence, 'id' | 'description'>;
