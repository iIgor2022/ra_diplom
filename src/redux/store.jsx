import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import topSaleSlice from './slices/topSaleSlice';
import rootSaga from './sagas/rootSaga';
import categoriesSlice from './slices/categoriesSlice';
import catalogItemsSlice from './slices/catalogItemsSlice';
import catalogItemDetailsSlice from './slices/catalogItemDetailsSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    topSales: topSaleSlice,
    categories: categoriesSlice,
    catalogItems: catalogItemsSlice,
    catalogItemDetails: catalogItemDetailsSlice,
    cart: cartSlice,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
