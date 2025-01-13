import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFeedback, TFeedbackSlice } from '@/types/feedback';

const initialState: TFeedbackSlice = {
  feedback: null,
  feedbacks: null,
  isFeedbackLoading: false,
  errorMessage: null,
  showModal: false,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    saveFeedback: (state, action: PayloadAction<TFeedback>) => {
      state.feedback = action.payload;
    },
    resetFeedback: state => {
      state.feedback = initialState.feedback;
    },
    saveFeedbackList: (state, action: PayloadAction<TFeedback[]>) => {
      state.feedbacks = action.payload;
    },
    saveFeedbackError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    resetFeedbackError: state => {
      state.errorMessage = initialState.errorMessage;
    },
    updateFeedbackModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isFeedbackLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('auth/logoutSuccess', () => {
      return initialState;
    });
  },
});

export const {
  saveFeedback,
  resetFeedback,
  saveFeedbackList,
  saveFeedbackError,
  resetFeedbackError,
  updateFeedbackModal,
  setLoading,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
