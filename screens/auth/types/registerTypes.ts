import { TNewUser } from './userTypes';

export type TRegisterForm = TNewUser & {
	passwordRepeat: string;
};
