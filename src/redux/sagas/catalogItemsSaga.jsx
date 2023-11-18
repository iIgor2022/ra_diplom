import {
  call, debounce, put, select, takeLatest,
} from 'redux-saga/effects';
import {
  changeCategory, changeSearchField, getCatalogItemFailure,
  getCatalogItemRequest, getCatalogItemSuccess,
} from '../slices/catalogItemsSlice';
import { isItemType } from './topSalesSaga';
import { getItemsList } from '../../api/service';

function* getCatalogItemsSaga() {
  const catalogItems = yield select((state) => state.catalogItems);

  try {
    const data = yield call(
      getItemsList({
        categoryId: String(catalogItems.categoryId),
        offset: String(catalogItems.offset),
        searchQuery: catalogItems.searchParam,
      }),
    );

    if (isItemType(data)) yield put(getCatalogItemSuccess({ catalogItems: data }));
    else throw new Error('Wrong item structure');
  } catch (error) {
    if (error instanceof Error) yield put(getCatalogItemFailure({ error: error.message }));
  }
}

function* getSearchField() {
  yield put(getCatalogItemRequest());
}

function* watchCatalogItemsSaga() {
  yield takeLatest(getCatalogItemRequest.type, getCatalogItemsSaga);
}

function* watchChangeCategorySaga() {
  yield takeLatest(changeCategory.type, getCatalogItemsSaga);
}

function* watchChangeSearchField() {
  yield debounce(1000, changeSearchField.type, getSearchField);
}

export { watchCatalogItemsSaga, watchChangeCategorySaga, watchChangeSearchField };
