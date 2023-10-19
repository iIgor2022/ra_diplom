/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  error: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories(state) {
      state.loading = true;
      state.error = '';
    },
    getCategoriesFailure(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    getCategoriesSuccess(state, action) {
      state.categories = action.payload.categories;
      state.loading = false;
      state.error = '';
    },
  },
});

export const {
  getCategories, getCategoriesFailure, getCategoriesSuccess,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
