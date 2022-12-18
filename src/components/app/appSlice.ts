import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorPalettes } from "../../models";
import { RootState } from "../../utils/app/rootReducer";

interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: ColorPalettes.default,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset: () => initialState,
    setTheme: (
      state,
      { payload }: PayloadAction<keyof typeof ColorPalettes>
    ) => {
      state.theme = ColorPalettes[payload];
    },
  },
});

export const selectCurrentTheme = (state: RootState) => state.app.theme;

export const { setTheme } = appSlice.actions;
