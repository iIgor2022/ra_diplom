import { call, put, takeLatest } from 'redux-saga/effects';
import { getTopSales } from '../../api/service';
import { failureTopSales, progressTopSales, successTopSales } from '../slices/topSaleSlice';

function isItemType(data) {
  const fields = ['category', 'price', 'title', 'images'];

  return data.every((item) => {
    const keys = Object.keys(item);

    return fields.every((field) => keys.includes(field));
  });
}

function* getTopSalesSaga() {
  try {
    const data = yield call(getTopSales);

    if (isItemType(data)) {
      yield put(successTopSales({ topSales: data }));
    } else {
      throw new Error('Wrong item structure');
    }
  } catch (error) {
    if (error instanceof Error) yield put(failureTopSales({ error: error.message }));
  }
}

function* watchGetTopSalesSaga() {
  yield takeLatest(progressTopSales.type, getTopSalesSaga);
}

export { watchGetTopSalesSaga, isItemType };
