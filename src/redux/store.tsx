import { configureStore } from "@reduxjs/toolkit";
import ProductStore from "./pageSlice";

export const store = configureStore({
  reducer: {product:ProductStore},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
