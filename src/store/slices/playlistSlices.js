import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addPlaylist(state, action) {
      state.push(action.payload);
    },
    updatePlaylist(state, action) {
      const { name, data } = action.payload;
      const playlistToUpdate = state.find((playlist) => playlist.name === name);
      if (playlistToUpdate) {
        playlistToUpdate.data = data;
      }
    },
  },
});

export const { addPlaylist, updatePlaylist } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
