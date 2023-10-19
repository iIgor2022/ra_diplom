import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: '',
  offset: 0,
  searchParam: '',
  categoryId: 0,
  isMoreItems: false,
};

const catalogItemsSlice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {
    changeSearchField(state, action) {
      state.items = [];
      state.categoryId = 0;
      state.error = '';
      state.isMoreItems = false;
      state.loading = false;
      state.offset = 0;
      state.searchParam = action.payload.search;
    },
    changeCategory(state, action) {
      state.items = [];
      state.categoryId = action.payload.categoryId;
      state.error = '';
      state.isMoreItems = false;
      state.offset = 0; 
    },
    getCatalogItemRequest(state) {
      state.items = [];
      state.loading = true;
      state.error = '';
    },
    getCatalogItemFailure(state, action) {
      state.items = [];
      state.loading = false;
      state.error = action.payload.error;
    },
    getCatalogItemSuccess(state, action) {
      state.items = action.payload.catalogItems;
      state.loading = false;
      state.error = '';
    }
  },
});

export const {
  changeSearchField, changeCategory, getCatalogItemRequest,
  getCatalogItemFailure, getCatalogItemSuccess,
} = catalogItemsSlice.actions;
export default catalogItemsSlice.payload;
