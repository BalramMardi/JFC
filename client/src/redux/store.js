import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/Auth/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
