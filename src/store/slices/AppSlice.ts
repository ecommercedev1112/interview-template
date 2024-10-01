import { createSlice } from "@reduxjs/toolkit";
import { IInterviewOverview, IImpression } from "@/types";
import { IMPRESSIONS, IMPRESSIONS_DETAILS } from "@/constants";

interface IinitialState {
  step: number;
  interviewOverview: IInterviewOverview | null;
  impressions: Array<IImpression>;
}

const initialState: IinitialState = {
  step: 0,
  interviewOverview: null,
  impressions: IMPRESSIONS.map((imp: string, index: number) => {
    return {
      category: imp,
      impressions: IMPRESSIONS_DETAILS[index].map((imp_detail: string) => {
        return {
          title: imp_detail,
          mark: 0,
        };
      }),
      comment: "",
    };
  }),
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
    setImressions: (state, action) => {
      state.impressions = action.payload;
    },
  },
});

export const { setStep, setInterviewOverview, setImressions } = appSlice.actions;

export default appSlice.reducer;
