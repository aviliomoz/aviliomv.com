import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./slices/tagsSlice";

export const store = configureStore({
  reducer: {
    tags: tagsSlice,
  },
});
