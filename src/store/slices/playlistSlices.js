import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addPlaylist(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPlaylist } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
