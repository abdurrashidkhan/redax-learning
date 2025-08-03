import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counter'
export const store = configureStore({
  reducer: {
    counter : counterReducer
  }
});