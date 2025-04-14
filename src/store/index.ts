import { configureStore } from "@reduxjs/toolkit";
import musicSheetReducer from "./musicSheetSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    musicSheet: musicSheetReducer,
    user: userReducer, // Adicionado o userSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
