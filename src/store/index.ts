import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "../services/api.service";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat([
      apiService.middleware,
    ]);
  },
});
