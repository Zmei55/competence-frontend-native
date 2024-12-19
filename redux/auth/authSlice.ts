import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TAuthState } from 'screens/auth';

const initialState: TAuthState = {
  authChecked: false,
  isAuthLoading: false,
  user: null,
  loginErrorMessage: null,
  registerErrorMessage: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      if (action.payload === 'Login successful') state.authChecked = true;
    },
    logoutSuccess: state => {
      state.authChecked = initialState.authChecked;
      state.user = initialState.user;
    },
    saveUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    resetUser: state => {
      state.user = initialState.user;
    },
    saveLoginErrorMessage: (state, action: PayloadAction<string>) => {
      state.loginErrorMessage = action.payload;
    },
    resetLoginErrorMessage: state => {
      state.loginErrorMessage = initialState.loginErrorMessage;
    },
    saveRegisterErrorMessage: (state, action: PayloadAction<string>) => {
      state.registerErrorMessage = action.payload;
    },
    resetRegisterErrorMessage: state => {
      state.registerErrorMessage = initialState.registerErrorMessage;
    },
    saveAuthErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    resetAuthErrorMessage: state => {
      state.errorMessage = initialState.errorMessage;
    },
    saveAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuthLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('auth/logoutSuccess', () => {
      return initialState;
    });
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  saveUser,
  saveLoginErrorMessage,
  saveRegisterErrorMessage,
  saveAuthErrorMessage,
  resetUser,
  resetLoginErrorMessage,
  resetRegisterErrorMessage,
  resetAuthErrorMessage,
  saveAuthLoading,
} = authSlice.actions;

export default authSlice.reducer;
