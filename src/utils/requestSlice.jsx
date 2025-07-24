import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    showRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArray = state.data.filter(
        (request) => request._id !== action.payload
      );
      return newArray;
    },
  },
});
export const { showRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
