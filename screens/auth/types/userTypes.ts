type User = {
  id: number | string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  nickName: string;
  password: string;
  roles: string[];
  avatarImageData: string | null;
};

export type TUser = Omit<User, 'password'>;

export type TCredentials = Pick<User, 'email' | 'password'>;

export type TNewUser = Pick<User, 'email' | 'password' | 'nickName'>;

export type TAuthState = {
  authChecked: boolean;
  isAuthLoading: boolean;
  user: TUser | null;
  loginErrorMessage: string | null;
  registerErrorMessage: string | null;
  errorMessage: string | null;
};
