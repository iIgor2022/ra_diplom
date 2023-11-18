import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategories, getCategoriesFailure, getCategoriesSuccess } from '../slices/categoriesSlice';
import { getCategoriesList } from '../../api/service';

function isCategory(data) {
  const fields = ['id', 'title'];
  return data.every((item) => {
    const keys = Object.keys(item);

    return fields.every((field) => keys.includes(field));
  });
}

function* getCategoriesSaga() {
  try {
    const data = yield call(getCategoriesList);

    if (isCategory(data)) yield put(getCategoriesSuccess({ categories: data }));
    else throw new Error('Wrong category structure');
  } catch (error) {
    if (error instanceof Error) yield put(getCategoriesFailure({ error: error.message }));
  }
}

function* watchCategoriesSaga() {
  yield takeLatest(getCategories.type, getCategoriesSaga);
}

export default watchCategoriesSaga;
