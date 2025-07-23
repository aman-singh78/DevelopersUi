import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userFeed from "./userFeed";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: userFeed,
  },
});

export default appStore;
