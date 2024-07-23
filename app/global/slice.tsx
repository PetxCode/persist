import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
  userName: "",
};

const slice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
    changeUserName: (state: { userName: string }, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { toggleMode, changeUserName } = slice.actions;

export default slice.reducer;
