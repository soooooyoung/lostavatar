import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorPalettes } from "../../models";
import { RootState } from "../../utils/app/rootReducer";

interface AppState {
  theme: string;
  textColor: string;
}

const initialState: AppState = {
  theme: ColorPalettes.white,
  textColor: ColorPalettes.black,
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
      state.textColor =
        ColorPalettes[payload] === "#ffffff" ? "#000000" : "#ffffff";
    },
  },
});

export const selectTheme = (state: RootState) => state.app.theme;

export const selectTextColor = (state: RootState) => state.app.textColor;

export const { setTheme } = appSlice.actions;
