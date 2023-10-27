/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {},
  loading: false,
  error: '',
  quantity: 1,
  size: '',
};

const catalogItemDetailsSlice = createSlice({
  name: 'catalogItemDetails',
  initialState,
  reducers: {
    getCatalogItemDetails(state) {
      state.product = {};
      state.loading = true;
      state.error = '';
    },
    getCatalogItemDetailsSuccess(state, action) {
      state.loading = false;
      state.error = '';
      state.product = action.payload;
    },
    getCatalogItemDetailsFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    changeQuantity(state, { payload }) {
      if (payload.quantity >= 1 && payload.quantity <= 10) state.quantity = payload.quantity;
    },
    setSize(state, { payload }) {
      state.size = payload.size;
    },
  },
});

export const {
  getCatalogItemDetails, getCatalogItemDetailsSuccess, getCatalogItemDetailsFailure,
  changeQuantity, setSize,
} = catalogItemDetailsSlice.actions;
export default catalogItemDetailsSlice.reducer;
