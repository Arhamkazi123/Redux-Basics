import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers"; // Import your root reducer

export const store = configureStore({
  reducer: reducers,
});
