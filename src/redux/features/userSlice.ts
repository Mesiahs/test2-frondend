import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  correctAnswers: number;
}

const initialState: UserState = {
  correctAnswers: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementCorrectAnswers: (state) => {
      state.correctAnswers ++
    },
    resetCorrectAnswers: (state) => {
      state.correctAnswers = 0;
    },
  },
});

export const { incrementCorrectAnswers, resetCorrectAnswers } = userSlice.actions;
export default userSlice.reducer