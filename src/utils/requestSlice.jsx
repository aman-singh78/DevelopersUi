import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    showRequest: (state, action) => {
      return action.payload;
    },
  },
});
export const { showRequest } = requestSlice.actions;
export default requestSlice.reducer;
