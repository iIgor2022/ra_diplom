import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategories, getCategoriesFailure, getCategoriesSuccess } from '../slices/categoriesSlice';

function isCategory(data) {
  if (data instanceof Array) {
    return data.every((item) => Object.keys(item).includes('id')
      && Object.keys(item).includes('title'));
  }
  return false;
}

function* getCategoriesSaga() {
  try {
    const data = yield call(getCategories);

    if (isCategory(data)) yield put(getCategoriesSuccess({ categories: data }));
  } catch (error) {
    if (error instanceof Error) yield put(getCategoriesFailure({ error: error.message }));
  }
}

function* watchCategoriesSaga() {
  yield takeLatest(getCategories.type, getCategoriesSaga);
}

export default watchCategoriesSaga;
