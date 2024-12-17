type User = {
  id: number | string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  nickName: string;
  roles: string[];
  avatarImageData: string | null;
};

export type TUser = User;

export type TNewUser = Pick<User, 'email' | 'nickName'> & {
  password: string;
};

export type TCredentials = {
  email?: string;
  password?: string;
};

export type TRegisterForm = TCredentials & {
  nickName?: string;
  passwordRepeat?: string;
};

export type TAuthState = {
  authChecked: boolean;
  isAuthLoading: boolean;
  user: TUser | null;
  loginErrorMessage: string | null;
  registerErrorMessage: string | null;
  errorMessage: string | null;
};
