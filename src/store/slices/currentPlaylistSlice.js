import { createSlice } from "@reduxjs/toolkit";

const currentPlaylistSlice = createSlice({
  name: "current",
  initialState: [],
  reducers: {
    addCurrent(state, action) {
      return action.payload;
    },
  },
});
export const { addCurrent } = currentPlaylistSlice.actions;
export const currentPlaylistReducer = currentPlaylistSlice.reducer;
