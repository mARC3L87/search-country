import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import axios from 'axios';

interface CountryTypes {
  countries: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  filteredCountry: {
    name: {
      common: string;
    };
  };
}
const initialState: CountryTypes = {
  countries: [],
  status: 'loading',
  filteredCountry: {
    name: {
      common: '',
    },
  },
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
  reducers: {
    findCountry: (state, action: PayloadAction<string | undefined>) => {
      state.filteredCountry = state.countries.find(
        (country) => country.name.common === action.payload
      );
    },
  },
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

export const selectFilterdCountries = (state: RootState) =>
  state.countryState.filteredCountry;

export const selectStatus = (state: RootState) => state.countryState.status;

export const { findCountry } = countrySlice.actions;

export default countrySlice.reducer;
