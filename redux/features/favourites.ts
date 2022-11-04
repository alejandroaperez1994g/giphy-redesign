import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface GIF {
  title: string;
  src: string;
}
const initialState = {
  favourites: [] as GIF[],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    setStoreFavorites: (state, action) => {
      state.favourites = action.payload;
    },
  },
});

export const { setStoreFavorites } = favoriteSlice.actions;
export const selectFavourites = (state: RootState) => state;

export default favoriteSlice.reducer;
