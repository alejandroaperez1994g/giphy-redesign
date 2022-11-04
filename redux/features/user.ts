import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state = action.payload;
    },
    resetCurrentUser: (state) => {
      state = initialState;
    },
  },
});
