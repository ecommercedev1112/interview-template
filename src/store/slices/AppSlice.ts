import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
  step: number;
}

const initialState: IinitialState = {
  step: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = appSlice.actions;

export default appSlice.reducer;
