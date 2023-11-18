import { call, put, takeLatest } from 'redux-saga/effects';
import { getCatalogItemDetails, getCatalogItemDetailsFailure, getCatalogItemDetailsSuccess } from '../slices/catalogItemDetailsSlice';
import { getItem } from '../../api/service';

function isProductType(data) {
  const fields = ['id', 'category', 'title', 'images', 'sku', 'manufacturer', 'color', 'material', 'reason',
    'season', 'heelSize', 'price', 'sizes'];
  const keys = Object.keys(data);

  return fields.every((field) => keys.includes(field));
}

function* getCatalogItemDetailsSaga(action) {
  try {
    const data = yield call(getItem(action.payload.id));

    if (isProductType(data)) yield put(getCatalogItemDetailsSuccess(data));
    else throw new Error('Wrong product structure');
  } catch (error) {
    if (error instanceof Error) yield put(getCatalogItemDetailsFailure({ error: error.message }));
  }
}

function* watchCatalogItemDetailsSaga() {
  yield takeLatest(getCatalogItemDetails.type, getCatalogItemDetailsSaga);
}

export default watchCatalogItemDetailsSaga;
