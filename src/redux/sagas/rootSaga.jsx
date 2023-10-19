import { spawn } from 'redux-saga/effects';
import { watchGetTopSalesSaga } from './topSalesSaga';
import watchCatalogItemsSaga from './catalogItemsSaga';
import watchCategoriesSaga from './categoriesSaga';

function* rootSaga() {
  yield spawn(watchGetTopSalesSaga);
  yield spawn(watchCatalogItemsSaga);
  yield spawn(watchCategoriesSaga);
}

export default rootSaga;
