import { call, put, takeLatest } from 'redux-saga/effects';
import { getCatalogItemDetails, getCatalogItemDetailsFailure, getCatalogItemDetailsSuccess } from '../slices/catalogItemDetailsSlice';
import { getItem } from '../../api/service';

function isProductType(data) {
  if (data instanceof Object) {
    return Object.keys(data).includes('id')
    && Object.keys(data).includes('category')
    && Object.keys(data).includes('title')
    && Object.keys(data).includes('images')
    && Object.keys(data).includes('sku')
    && Object.keys(data).includes('manufacturer')
    && Object.keys(data).includes('color')
    && Object.keys(data).includes('material')
    && Object.keys(data).includes('reason')
    && Object.keys(data).includes('season')
    && Object.keys(data).includes('heelSize')
    && Object.keys(data).includes('price')
    && Object.keys(data).includes('sizes');
  }
  return false;
}

function* getCatalogItemDetailsSaga(action) {
  try {
    const data = yield call(getItem(action.payload.id));

    if (isProductType(data)) yield put(getCatalogItemDetailsSuccess(data));
  } catch (error) {
    if (error instanceof Error) yield put(getCatalogItemDetailsFailure({ error: error.message }));
  }
}

function* watchCatalogItemDetailsSaga() {
  yield takeLatest(getCatalogItemDetails.type, getCatalogItemDetailsSaga);
}

export default watchCatalogItemDetailsSaga;
