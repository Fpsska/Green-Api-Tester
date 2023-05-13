import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import chatSlice from './slices/chatSlice';

// /. imports

export const store = configureStore({
  reducer: { authSlice, chatSlice }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
