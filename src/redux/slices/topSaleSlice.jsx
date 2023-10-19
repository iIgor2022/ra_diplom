/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topSales: [],
  loading: false,
  error: null,
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
      const { items } = action.payload.topSales;

      state.error = '';
      state.loading = false;
      state.topSales = items;
    },
    failureTopSales(state, action) {
      const { message } = action.payload.error;

      state.loading = false;
      state.error = message;
    },
  },
});

export const {
  progressTopSales, successTopSales, failureTopSales,
} = topSalesSlices.actions;
export default topSalesSlices.reducer;
