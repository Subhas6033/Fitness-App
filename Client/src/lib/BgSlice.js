import { createSlice } from "@reduxjs/toolkit";

// Define available background themes
const initialState = {
  current: "dark",
  themes: {
    light: "bg-white",
    dark: "bg-gray-900",
  },
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackground: (state, action) => {
      if (state.themes[action.payload]) {
        state.current = action.payload;
      } else {
        console.warn(`Background theme '${action.payload}' not found`);
      }
    },
    addBackgroundTheme: (state, action) => {
      // payload: { key: string, value: string }
      const { key, value } = action.payload;
      state.themes[key] = value;
    },
  },
});

export const { setBackground, addBackgroundTheme } = backgroundSlice.actions;

export default backgroundSlice.reducer;
