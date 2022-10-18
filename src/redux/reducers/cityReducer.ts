import { createSlice } from '@reduxjs/toolkit';

export const cityReducer = createSlice({
  name: 'city',
  initialState: {
    city: 'london',
  },
  reducers: {
    saveCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { saveCity } = cityReducer.actions;

export default cityReducer.reducer;
