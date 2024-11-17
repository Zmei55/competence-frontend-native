type Feedback = {
	id: number;
	competaId: number;
	rating: number;
	review: string | null;
	isBelieve: boolean | null;
	dateCreate: string;
	nickName: string;
	email: string;
};

export type TFeedback = Feedback;

export type TNewEmptyFeedbackUnregisteredUser = {
	competaId: number;
	email: string;
	firstName: string;
};

export type TNewEmptyFeedbackRegisteredUser = {
	competaId: number;
	userProfileId: number;
};

export type TResponseFeedback = Required<
	Pick<Feedback, 'id' | 'rating' | 'review' | 'isBelieve' | 'dateCreate' | 'email' | 'nickName'>
>;

export type TNewCompletedFeedback = Omit<Feedback, 'id' | 'dateCreate' | 'nickName' | 'email'>;

export type TFeedbackSlice = {
	feedback: TResponseFeedback | null;
	feedbacks: TResponseFeedback[] | null;
	isFeedbackLoading: boolean;
	errorMessage: string | null;
	showModal: boolean;
};
