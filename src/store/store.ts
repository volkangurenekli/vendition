import { configureStore } from '@reduxjs/toolkit';
import productsSliceReducer from './products-slice.reducer';

const store = configureStore({
  reducer: {
    products: productsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
