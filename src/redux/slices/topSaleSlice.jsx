/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topSales: [],
  loading: false,
  error: '',
};

const topSalesSlices = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    progressTopSales(state) {
      state.loading = true;
      state.error = '';
    },
    successTopSales(state, action) {
      const items = action.payload.topSales;

      state.error = '';
      state.loading = false;
      state.topSales = items;
    },
    failureTopSales(state, action) {
      const { error } = action.payload;

      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  progressTopSales, successTopSales, failureTopSales,
} = topSalesSlices.actions;
export default topSalesSlices.reducer;
