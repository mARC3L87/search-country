import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import axios from 'axios';

interface CountryTypes {
  countries: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
const initialState: CountryTypes = {
  countries: [],
  status: 'loading',
};

export const fetchCountries = createAsyncThunk(
  'country/fetchCountries',
  async () => {
    try {
      const fetchedAllCountries = await axios.get(
        'https://restcountries.com/v3.1/all'
      );
      return fetchedAllCountries.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.status = 'idle';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectAllCountries = (state: RootState) =>
  state.countryState.countries;
export const selectStatus = (state: RootState) => state.countryState.status;

export default countrySlice.reducer;
