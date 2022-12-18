import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorPalettes } from "../../models";
import { RootState } from "../../utils/app/rootReducer";

interface AppState {
  theme: string;
  textColor: string;
}

const initialState: AppState = {
  theme: ColorPalettes.default,
  textColor: ColorPalettes.white,
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
      state.textColor = payload === "white" ? "#000000" : "#ffffff";
    },
  },
});

export const selectTheme = (state: RootState) => state.app.theme;

export const selectTextColor = (state: RootState) => state.app.textColor;

export const { setTheme } = appSlice.actions;
