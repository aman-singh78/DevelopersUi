import { createSlice } from "@reduxjs/toolkit";

const userConnections = createSlice({
  name: "userConnection",
  initialState: null,
  reducers: {
    addConnection: (state, action) => {
      return action.payload;
    },
    removeConnection: (state, action) => {
      return null;
    },
  },
});

export const { addConnection, removeConnection } = userConnections.actions;

export default userConnections.reducer;
