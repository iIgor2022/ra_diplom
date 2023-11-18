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
  isSuccess: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    postOrderRequest(state, { payload }) {
      state.body.items = payload.items;
      state.body.owner = payload.owner;
      state.loading = true;
      state.isSuccess = '';
    },
    postOrderSuccess(state, { payload }) {
      state.loading = false;
      state.isSuccess = payload;
      state.items = [];
      state.owner = {};
    },
    postOrderFailure(state, { payload }) {
      state.loading = false;
      state.isSuccess = payload.error;
      state.items = [];
      state.owner = {};
    },
    clearError(state) {
      state.isSuccess = '';
    },
  },
});

export const {
  postOrderRequest, postOrderSuccess, postOrderFailure,
  clearError,
} = orderSlice.actions;
export default orderSlice.reducer;
