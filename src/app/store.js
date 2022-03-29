import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/TheCars/theCars"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
