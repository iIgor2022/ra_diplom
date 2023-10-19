import { call, put } from "redux-saga/effects";
import { getCatalogItemFailure, getCatalogItemRequest, getCatalogItemSuccess } from "../slices/catalogItemsSlice";
import { isItemType } from "./topSalesSaga";
import { takeLast } from "rxjs";

function* getCatalogItemsSaga() {
  try {
    const data = yield call(getCatalogItemRequest);

    if (isItemType(data)) yield put(getCatalogItemSuccess({ catalogItems: data }));
  } catch (error) {
    if (error instanceof Error) yield put(getCatalogItemFailure({ error: error.message }));
  }
}

function* watchCatalogItemsSaga() {
  yield takeLast(getCatalogItemRequest.type, getCatalogItemsSaga);
}

export default watchCatalogItemsSaga;
