import { configureStore } from "@reduxjs/toolkit";
import {
  playlistReducer,
  addPlaylist,
  updatePlaylist,
} from "./slices/playlistSlices";
import {
  currentPlaylistReducer,
  addCurrent,
} from "./slices/currentPlaylistSlice";
const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    current: currentPlaylistReducer,
  },
});

export { store, addPlaylist, updatePlaylist };
export { addCurrent };
