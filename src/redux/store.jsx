import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import topSaleSlice from './slices/topSaleSlice';
import rootSaga from './sagas/rootSaga';
import categoriesSlice from './slices/categoriesSlice';
import catalogItemsSlice from './slices/catalogItemsSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    topSales: topSaleSlice,
    categories: categoriesSlice,
    catalogItems: catalogItemsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
