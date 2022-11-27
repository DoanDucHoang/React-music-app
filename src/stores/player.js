import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: false,
  show: false,
  controls: false,
  playing: false,
  repeat: false,
  isNextSong: false,
  theme:
    'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg',
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setIsNextSong(state, action) {
      if (state.isNextSong !== action.payload) {
        state.isNextSong = action.payload;
      }
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
    setRepeat: (state, action) => {
      state.shuffle = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setControls,
  setCurrent,
  setPlaying,
  setRepeat,
  setIsNextSong,
  setShow,
  setTheme,
} = playerSlice.actions;

export default playerSlice.reducer;
