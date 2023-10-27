import { call, put, takeLatest } from 'redux-saga/effects';
import { postOrder } from '../../api/service';
import { postOrderFailure, postOrderRequest, postOrderSuccess } from '../slices/orderSlice';
import { clearCart } from '../slices/cartSlice';

function* postOrderSaga({ payload }) {
  try {
    const data = yield call(postOrder(payload));

    yield put(clearCart());
    yield put(postOrderSuccess(data));
  } catch (error) {
    if (error instanceof Error) yield put(postOrderFailure({ error: error.message }));
  }
}

function* watchOrderSaga() {
  yield takeLatest(postOrderRequest.type, postOrderSaga);
}

export default watchOrderSaga;
