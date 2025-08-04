import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counter'
import logger from './middlewares/loger'
export const store = configureStore({
  reducer: {
    counter : counterReducer
  },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});