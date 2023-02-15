import { configureStore } from "@reduxjs/toolkit";
import { playlistReducer, addPlaylist } from "./slices/playlistSlices";

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});

export { store, addPlaylist };
