import { IInterviewOverview } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  step: number;
  interviewOverview: IInterviewOverview | null;
}

const initialState: IinitialState = {
  step: 0,
  interviewOverview: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setInterviewOverview: (state, action) => {
      state.interviewOverview = action.payload;
    },
  },
});

export const { setStep, setInterviewOverview } = appSlice.actions;

export default appSlice.reducer;
