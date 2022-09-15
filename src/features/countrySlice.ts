import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface CountryState {
  mode: 'dark' | 'light';
}
const initialState: CountryState = {
  mode: 'dark',
};
export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode === 'dark' ? (state.mode = 'light') : (state.mode = 'dark');
    },
  },
});

export const selectMode = (state: RootState) => state.countryState.mode;

export const { changeMode } = countrySlice.actions;

export default countrySlice.reducer;
