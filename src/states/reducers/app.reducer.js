import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  app_state_loaded: false,
  app_state_theme: "dark",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppStateLoaded: (state, action) => {
      state.app_state_loaded = action.payload;
    },
    setAppStateDarkTheme: (state, action) => {
      state.app_state_theme = "dark";
    },
    setAppStateLightTheme: (state, action) => {
      state.app_state_theme = "light";
    },
  },
});

export const {
  setAppStateLoaded,
  setAppStateDarkTheme,
  setAppStateLightTheme,
} = appSlice.actions;
export default appSlice.reducer;
