import { useDispatch } from 'react-redux'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bbqReducer from './bbqSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    bbq: bbqReducer,
    user: userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useDispatcher = () => useDispatch<AppDispatch>()
