import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userFeed from "./userFeed";
import userConnections from "./userConnections";
import requestSlice from "./requestSlice";
const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: userFeed,
    userConnection: userConnections,
    request: requestSlice,
  },
});

export default appStore;
