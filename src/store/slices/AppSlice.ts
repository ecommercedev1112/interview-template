import { createSlice } from "@reduxjs/toolkit";
import { IInterviewOverview, IImpression, IFeedback } from "@/types";
import { IMPRESSIONS, IMPRESSIONS_DETAILS } from "@/constants";

interface IinitialState {
  step: number;
  interviewOverview: IInterviewOverview | null;
  impressions: Array<IImpression>;
  feedbacks: Array<IFeedback>;
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
  feedbacks: [],
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
    setFeedbacks: (state, action) => {
      state.feedbacks = action.payload;
    },
  },
});

export const { setStep, setInterviewOverview, setImressions, setFeedbacks } =
  appSlice.actions;

export default appSlice.reducer;
