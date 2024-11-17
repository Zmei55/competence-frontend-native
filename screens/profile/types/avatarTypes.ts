type Avatar = {
	id: number;
	name: string;
	url: string;
};

export type TAvatar = Pick<Avatar, 'id' | 'name' | 'url'>;

export type TAvatarState = {
	errorMessage: string | null;
};
