type Password = {
	oldPassword: string;
	newPassword: string;
};

export type TPassword = Pick<Password, 'oldPassword' | 'newPassword'>;

export type TResetForm = Pick<Password, 'oldPassword' | 'newPassword'> & {
	newPasswordRepeat: string;
};
