import { createSlice } from "@reduxjs/toolkit";
import { artist } from "../Pages/podcast/data/Artist";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: artist,
    index: 0,
    flag: false,
  },
  reducers: {
    track: (state, action) => {
      state.index = action.payload;
    },
    trackFalg: (state, action) => {
      state.flag = action.payload;
    },
  },
});

export const { track, trackFalg } = dataSlice.actions;
export default dataSlice.reducer;
