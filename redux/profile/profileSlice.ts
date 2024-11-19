import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProfile, TProfileState } from 'screens/profile';

const initialState: TProfileState = {
  profile: null,
  errorMessage: null,
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfile: (state, action: PayloadAction<TProfile>) => {
      state.profile = action.payload;
    },
    saveProfileError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    resetProfileError: state => {
      state.errorMessage = initialState.errorMessage;
    },
    deleteOtherAddress: state => {
      if (state.profile) state.profile.otherAddress = null;
    },
  },
});

export const {
  saveProfile,
  saveProfileError,
  resetProfileError,
  deleteOtherAddress,
} = profileSlice.actions;

export default profileSlice.reducer;
