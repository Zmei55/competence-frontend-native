type Country = {
	id: number;
	name: string;
	iso2: string;
};

export type TCountry = Pick<Country, 'id' | 'name' | 'iso2'>;

export type TCountryState = {
	countries: TCountry[] | [];
};
