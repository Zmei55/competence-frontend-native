import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import appReducer from './app/appSlice';
import authReducer from './auth/authSlice';
import competencesReducer from './competence/competenceSlice';
import profileReducer from './profile/profileSlice';
import guidesReducer from './administration/guidesSlice';
import countryReducer from './profile/countrySlice';
import administrationReducer from './administration/administrationSlice';
import feedbackReducer from './feedback/feedbackSlice';

import { api } from './app/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    app: appReducer,
    auth: authReducer,
    competences: competencesReducer,
    profile: profileReducer,
    guides: guidesReducer,
    countries: countryReducer,
    administration: administrationReducer,
    feedback: feedbackReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
