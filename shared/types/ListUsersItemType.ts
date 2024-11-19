export type TListUsersItem = {
  id: number | string;
  nickName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  roles?: string[] | string;
  avatarName?: string;
  avatarImageData?: string;
  userStatus?: string;
};
