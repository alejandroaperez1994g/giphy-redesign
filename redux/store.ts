import { configureStore } from '@reduxjs/toolkit';
import { gifAPI } from './gifAPI';
import { favoriteSlice } from './features/favourites';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

export const store = configureStore({
  reducer: {
    favourites: favoriteSlice.reducer,
    [gifAPI.reducerPath]: gifAPI.reducer,
  },
  //Adding api middleware enables caching, invalidation, polling
  // and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

//optional, but required from refecthOnFocus/refecthOnReconnect behaviors
// see setupListeners docs for more info
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
