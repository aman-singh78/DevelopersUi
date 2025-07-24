import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addUserFeed: (state, action) => {
      return action.payload;
    },
    removeUserFeed: (state, action) => {
      const newArray = state.filter((user) => user._id !== action.payload);
      return newArray;
    },
  },
});

export const { addUserFeed, removeUserFeed } = userFeed.actions;

export default userFeed.reducer;
