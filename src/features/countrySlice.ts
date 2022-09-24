import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import axios from 'axios';

interface CountryTypes {
  codes: any | [];
  countries: any[];
  searchedCountry: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  filteredCountry:
    | any
    | {
        name: {
          common: string;
          nativeName: any | {};
        };
        tld: string[];
        currencies?: {};
        capital: string[];
        region: string;
        subregion: string;
        languages?: any | {};
        borders?: string[] | undefined;
        population: number;
        flags: {
          svg: string;
        };
      };
}
const initialState: CountryTypes = {
  codes: [],
  countries: [],
  searchedCountry: [],
  status: 'loading',
  filteredCountry: {
    name: {
      common: '',
      nativeName: {},
    },
    tld: [],
    currencies: {},
    capital: [],
    region: '',
    subregion: '',
    languages: {},
    borders: [],
    population: 0,
    flags: {
      svg: '',
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
export const fetchCodes = createAsyncThunk(
  'country/fetchCodes',
  async (code: string) => {
    try {
      const codes = await axios.get<CountryTypes>(
        `https://restcountries.com/v3.1/alpha?codes=${code}`
      );
      return codes.data;
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
        (country) => country.name.common.toLowerCase() === action.payload
      );
    },
    clearCountry: (state) => {
      state.filteredCountry = {};
      state.codes = [];
      state.searchedCountry = [];
    },
    searchForCountry: (state, action: PayloadAction<string>) => {
      state.searchedCountry = state.countries.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload)
      );
      // console.log(action);
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
      })
      .addCase(fetchCodes.fulfilled, (state, action) => {
        state.codes = action.payload;
      });
  },
});

export const selectAllCountries = (state: RootState) =>
  state.countryState.countries;

export const selectFilterdCountries = (state: RootState) =>
  state.countryState.filteredCountry;

export const selectStatus = (state: RootState) => state.countryState.status;

export const selectNameByCodes = (state: RootState) => state.countryState.codes;

export const selectSearchedCountry = (state: RootState) =>
  state.countryState.searchedCountry;

export const { findCountry, clearCountry, searchForCountry } =
  countrySlice.actions;

export default countrySlice.reducer;
