import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appStore = configureStore({
  reducer: {
    name: userSlice,
  },
});

export default appStore;
