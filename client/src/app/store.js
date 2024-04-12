import { configureStore } from "@reduxjs/toolkit";
// import audioPlaySlice from "../features/audioPlaySlice";
import dataSlice from "../features/dataSlice";
import isLoggedIn from "../features/isLoggedIn";
import podcastId from "../features/podcastId"

const store = configureStore({
  reducer: {
    // audioPlay:audioPlaySlice,
    data: dataSlice,
    isLoggedIn,
    podcastId
  },
});

export default store;
