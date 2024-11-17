import { Dayjs } from 'dayjs';

type AdminUser = {
	id: number | string;
	nickName: string;
	email: string;
	userStatus: string;
	roles: string[];
	firstName: string;
	lastName: string;
	phone: string;
	dateOfBirth: Dayjs | null;
	profession: string | null;
	skillLevelId: number | null;
	specialty: string | null;
	statusInSchool: string | null;
};

export type TAdminUser = AdminUser;

export type TAdminUserEmailUpdate = Pick<AdminUser, 'email'>;

export type TAdminUserNicknameUpdate = Pick<AdminUser, 'nickName'>;

export type TAdminUserStatusInSchoolUpdate = Pick<AdminUser, 'statusInSchool'>;

export type TAdminUserRolesUpdate = Pick<AdminUser, 'roles'>;

export type TAdminUserDataUpdate = Omit<
	AdminUser,
	| 'id'
	| 'specialty'
	| 'skillLevelId'
	| 'nickName'
	| 'email'
	| 'statusInSchool'
	| 'roles'
	| 'userStatus'
> & {
	specialty: string[] | string | null;
	skillLevelId: string | null;
};

export type TAdminUserProfile = Pick<AdminUser, 'id' | 'firstName' | 'lastName' | 'dateOfBirth'>;

export type TAdminUserSearch = {
	name: string;
};
