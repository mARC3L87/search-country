import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface ModeState {
  mode: 'dark' | 'light';
}
const initialState: ModeState = {
  mode: 'dark',
};
export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode === 'dark' ? (state.mode = 'light') : (state.mode = 'dark');
    },
  },
});

export const selectMode = (state: RootState) => state.modeState.mode;

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
