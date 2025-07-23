import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userFeed from "./userFeed";
import userConnections from "./userConnections";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: userFeed,
    userConnection: userConnections,
  },
});

export default appStore;
