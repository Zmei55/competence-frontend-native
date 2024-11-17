import { Dayjs } from 'dayjs';

export type TProfile = {
	id: number | string;
	email: string;
	nickName: string;
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	dateOfBirth: Dayjs | null;
	dateCreate: Dayjs;
	profession: string | null;
	skillLevelId: number | null;
	public: boolean;
	residence: string | null;
	specialty: string | null;
	readyToMove: boolean;
	avatarImageData: string | null;
	statusInSchool: string | null;
	address: Address | null;
	otherAddress: Address | null;
	location: string | null;
};

type Address = {
	country: string | null;
	postcode: string | null;
	city: string | null;
	address: string | null;
};

export type TProfileState = {
	profile: TProfile | null;
	errorMessage: string | null;
	isLoading: boolean;
};

export type TProfileName = {
	firstName: string;
	lastName: string;
};

export interface IProfileFormValues {
	firstName: string | null;
	lastName: string | null;
	phone: string | null;
	dateOfBirth: Dayjs | null;
	profession: string | null;
	skillLevelId: string | null;
	public: boolean;
	residence: string | null;
	specialty: string[] | string | null;
	readyToMove: boolean;
	statusInSchool: string | null;
	address: Address | null;
	otherAddress: Address | null;
	location: string | null;
}
