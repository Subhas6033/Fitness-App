import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "../lib/BgSlice";

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
  },
});

export default store;
