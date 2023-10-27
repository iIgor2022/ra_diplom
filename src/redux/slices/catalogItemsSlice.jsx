/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogItems: [],
  lastLoadedItemsLength: -2,
  loading: false,
  error: '',
  offset: 0,
  searchParam: '',
  categoryId: 0,
  isMoreItems: false,
  disabledMoreItemsButton: false,
};

const catalogItemsSlice = createSlice({
  name: 'catalogItems',
  initialState,
  reducers: {
    changeSearchField(state, { payload }) {
      state.catalogItems = [];
      state.categoryId = 0;
      state.error = '';
      state.isMoreItems = false;
      state.loading = true;
      state.offset = 0;
      state.searchParam = payload;
    },
    clearSearchQuery(state) {
      state.searchParam = '';
    },
    changeCategory(state, { payload }) {
      state.catalogItems = [];
      state.categoryId = payload.categoryId;
      state.error = '';
      state.isMoreItems = false;
      state.offset = 0;
      state.loading = true;
      state.lastLoadedItemsLength = -2;
    },
    getCatalogItemRequest(state, { payload }) {
      state.lastLoadedItemsLength = -1;
      state.loading = true;
      if (payload) state.offset += payload.offset;
      state.error = '';
      state.disabledMoreItemsButton = true;
    },
    getCatalogItemFailure(state, { payload }) {
      state.catalogItems = [];
      state.loading = false;
      state.error = payload.error;
      state.disabledMoreItemsButton = false;
    },
    getCatalogItemSuccess(state, { payload }) {
      state.catalogItems.push(...payload.catalogItems);
      state.lastLoadedItemsLength = payload.catalogItems.length;
      state.loading = false;
      state.error = '';
      state.disabledMoreItemsButton = false;
    },
  },
});

export const {
  changeSearchField, changeCategory, getCatalogItemRequest,
  getCatalogItemFailure, getCatalogItemSuccess, clearSearchQuery,
} = catalogItemsSlice.actions;
export default catalogItemsSlice.reducer;
