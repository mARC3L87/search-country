import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectAllCountries,
  selectStatus,
  selectSearchedCountry,
  selectRegionCountry,
} from '../../features/countrySlice';
import { fetchCountries } from '../../features/countrySlice';
import CountryCard from '../CountryCard/CountryCard';
import Spinner from '../Spinner/Spinner';
import './CountryWrapper.scss';

const CountryWrapper = () => {
  const dispatch = useAppDispatch();
  const allCountries = useAppSelector(selectAllCountries);
  const status = useAppSelector(selectStatus);
  const searchedCountry = useAppSelector(selectSearchedCountry);
  const searchByRegion = useAppSelector(selectRegionCountry);

  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <Spinner />;
  }
  return (
    <div className='country-wrapper'>
      {searchByRegion && searchByRegion.length !== 0
        ? searchByRegion
            .map((country, index) => (
              <CountryCard country={country} key={index} />
            ))
            .slice(0, 8)
        : searchedCountry && searchedCountry.length !== 0
        ? searchedCountry
            .map((country, index) => (
              <CountryCard country={country} key={index} />
            ))
            .slice(0, 8)
        : searchByRegion.length === 0 &&
          allCountries
            .map((country, index) => (
              <CountryCard country={country} key={index} />
            ))
            .slice(0, 8)}
    </div>
  );
};

export default CountryWrapper;
