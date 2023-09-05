import { AlertColor } from "@mui/material";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface Snackbar {
  message: string;
  severity?: AlertColor;
}

export interface AppState {
  snackbarList: Snackbar[];
}

const initialState: AppState = {
  snackbarList: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addSnackbar: (state, action: PayloadAction<Snackbar>) => {
      state.snackbarList.push(action.payload);
    },
    removeSnackbar: (state) => {
      state.snackbarList.shift();
    },
  },
});

export const { addSnackbar, removeSnackbar } = appSlice.actions;

export default appSlice.reducer;
