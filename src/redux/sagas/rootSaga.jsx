import { spawn } from 'redux-saga/effects';
import { watchGetTopSalesSaga } from './topSalesSaga';
import watchCategoriesSaga from './categoriesSaga';
import { watchCatalogItemsSaga, watchChangeCategorySaga, watchChangeSearchField } from './catalogItemsSaga';
import watchCatalogItemDetailsSaga from './catalogItemDetailsSaga';
import watchOrderSaga from './orderSaga';

function* rootSaga() {
  yield spawn(watchGetTopSalesSaga);
  yield spawn(watchCatalogItemsSaga);
  yield spawn(watchChangeCategorySaga);
  yield spawn(watchChangeSearchField);
  yield spawn(watchCategoriesSaga);
  yield spawn(watchCatalogItemDetailsSaga);
  yield spawn(watchOrderSaga);
}

export default rootSaga;
