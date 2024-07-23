import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleMode } = slice.actions;

export default slice.reducer;
