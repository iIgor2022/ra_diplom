import { call, put, takeLatest } from 'redux-saga/effects';
import { getTopSales } from '../../api/service';
import { failureTopSales, progressTopSales, successTopSales } from '../slices/topSaleSlice';

function isItemType(data) {
  if (data instanceof Array) {
    return data.every((item) => Object.keys(item).includes('id')
    && Object.keys(item).includes('category')
    && Object.keys(item).includes('price')
    && Object.keys(item).includes('title')
    && Object.keys(item).includes('images'));
  }
  return false;
}

function* getTopSalesSaga() {
  try {
    const data = yield call(getTopSales);

    if (isItemType(data)) yield put(successTopSales({ topSales: data }));
  } catch (error) {
    if (error instanceof Error) yield put(failureTopSales({ error: error.message }));
  }
}

function* watchGetTopSalesSaga() {
  yield takeLatest(progressTopSales.type, getTopSalesSaga);
}

export { watchGetTopSalesSaga, isItemType};
