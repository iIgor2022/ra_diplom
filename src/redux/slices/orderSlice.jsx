/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  body: {
    owner: {
      phone: '',
      address: '',
    },
    items: [
      {
        id: 0,
        price: 0,
        count: 0,
      },
    ],
  },
  loading: false,
  error: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    postOrderRequest(state, { payload }) {
      state.body.items = payload.items;
      state.body.owner = payload.owner;
      state.loading = true;
      state.error = '';
    },
    postOrderSuccess(state, { payload }) {
      state.loading = false;
      state.error = payload;
      state.items = [];
      state.owner = {};
    },
    postOrderFailure(state, { payload }) {
      state.loading = false;
      state.error = payload.error;
      state.items = [];
      state.owner = {};
    },
    clearError(state) {
      state.error = '';
    },
  },
});

export const {
  postOrderRequest, postOrderSuccess, postOrderFailure,
  clearError,
} = orderSlice.actions;
export default orderSlice.reducer;
