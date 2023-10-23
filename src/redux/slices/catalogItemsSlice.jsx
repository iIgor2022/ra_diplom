/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogItems: [],
  lastLoadedItemsLength: -1,
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
    changeSearchField(state, action) {
      state.catalogItems = [];
      state.categoryId = 0;
      state.error = '';
      state.isMoreItems = false;
      state.loading = false;
      state.offset = 0;
      state.searchParam = action.payload;
    },
    changeCategory(state, action) {
      state.catalogItems = [];
      state.categoryId = action.payload.categoryId;
      state.error = '';
      state.isMoreItems = false;
      state.offset = 0;
    },
    getCatalogItemRequest(state, { payload }) {
      state.lastLoadedItemsLength = -1;
      state.loading = true;
      if (payload) state.offset += payload.offset;
      state.error = '';
      state.disabledMoreItemsButton = true;
    },
    getCatalogItemFailure(state, action) {
      state.catalogItems = [];
      state.loading = false;
      state.error = action.payload.error;
      state.disabledMoreItemsButton = false;
    },
    getCatalogItemSuccess(state, action) {
      state.catalogItems.push(...action.payload.catalogItems);
      state.lastLoadedItemsLength = action.payload.catalogItems.length;
      state.loading = false;
      state.error = '';
      state.disabledMoreItemsButton = false;
    },
  },
});

export const {
  changeSearchField, changeCategory, getCatalogItemRequest,
  getCatalogItemFailure, getCatalogItemSuccess,
} = catalogItemsSlice.actions;
export default catalogItemsSlice.reducer;
