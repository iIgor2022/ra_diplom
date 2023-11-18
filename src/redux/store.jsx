import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import topSaleSlice from './slices/topSaleSlice';
import rootSaga from './sagas/rootSaga';
import categoriesSlice from './slices/categoriesSlice';
import catalogItemsSlice from './slices/catalogItemsSlice';
import catalogItemDetailsSlice from './slices/catalogItemDetailsSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'bosaNoga',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    topSales: topSaleSlice,
    categories: categoriesSlice,
    catalogItems: catalogItemsSlice,
    catalogItemDetails: catalogItemDetailsSlice,
    persist: persistedReducer,
    order: orderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
