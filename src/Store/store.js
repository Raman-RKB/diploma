import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: [],
  play: 'Чтобы из-за null страница не стопорилась в начале',
  tracks: null
};

const tracksReducer = (state = initialState.tracks, action) => {
  switch (action.type) {
    case "SET_TRACKLIST":
      return { ...state, tracklist: action.payload };
    default:
      return state;
  }
};

const tokenReducer = (state = initialState.token, action) => {
  switch (action.type) {
    case "SAVE_TOKEN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const trackIdReducer = (state = initialState.id, action) => {
  switch (action.type) {
    case "SAVE_ID":
      return [...state, action.payload];
    case "REMOVE_ID":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const playReducer = (state = initialState.play, action) => {
  switch (action.type) {
    case "PLAY_TRACK":
      return { ...state, play: action.payload };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    id: trackIdReducer,
    play: playReducer,
    tracks: tracksReducer
  }
});

export default store;