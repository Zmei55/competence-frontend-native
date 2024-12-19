import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAppState {
  snackbarMessage: string | null;
  snackbarError: string | null;
}

const initialState: IAppState = {
  snackbarMessage: null,
  snackbarError: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveSnackbarMessage: (state, action: PayloadAction<string>) => {
      state.snackbarMessage = action.payload;
    },
    resetSnackbarMessage: state => {
      state.snackbarMessage = initialState.snackbarMessage;
    },
    saveSnackbarError: (state, action: PayloadAction<string>) => {
      state.snackbarError = action.payload;
    },
    resetSnackbarError: state => {
      state.snackbarError = initialState.snackbarError;
    },
  },
});

export const {
  saveSnackbarMessage,
  saveSnackbarError,
  resetSnackbarMessage,
  resetSnackbarError,
} = appSlice.actions;

export default appSlice.reducer;
