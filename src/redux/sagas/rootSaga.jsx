import { spawn } from 'redux-saga/effects';
import { watchGetTopSalesSaga } from './topSalesSaga';
import watchCategoriesSaga from './categoriesSaga';
import { watchCatalogItemsSaga, watchChangeCategorySaga, watchChangeSearchField } from './catalogItemsSaga';

function* rootSaga() {
  yield spawn(watchGetTopSalesSaga);
  yield spawn(watchCatalogItemsSaga);
  yield spawn(watchChangeCategorySaga);
  yield spawn(watchChangeSearchField);
  yield spawn(watchCategoriesSaga);
}

export default rootSaga;
