import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCompetence, TCompetenceSlice } from 'screens/competence';

const initialState: TCompetenceSlice = {
  competence: null,
  competences: null,
  isCompetenceLoading: false,
  errorMessage: null,
  showModal: false,
};

const competenceSlice = createSlice({
  name: 'competence',
  initialState,
  reducers: {
    saveCompetence: (state, action: PayloadAction<TCompetence>) => {
      state.competence = action.payload;
    },
    resetCompetence: state => {
      state.competence = initialState.competence;
    },
    saveCompetenceList: (state, action: PayloadAction<TCompetence[]>) => {
      state.competences = action.payload;
    },
    saveCompetaError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    resetCompetaError: state => {
      state.errorMessage = initialState.errorMessage;
    },
    updateCompetaModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase('auth/logoutSuccess', () => {
      return initialState;
    });
  },
});

export const {
  saveCompetence,
  saveCompetenceList,
  resetCompetence,
  saveCompetaError,
  resetCompetaError,
  updateCompetaModal,
} = competenceSlice.actions;

export default competenceSlice.reducer;
