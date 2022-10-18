import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './reducers/weatherReducer';
import cityReducer from './reducers/cityReducer';

const store = configureStore({
  reducer: { weatherReducer, cityReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
