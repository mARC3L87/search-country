import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import modeSlice from '../features/modeSlice';
import countrySlice from '../features/countrySlice';

export const store = configureStore({
  reducer: {
    modeState: modeSlice,
    countryState: countrySlice,
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
