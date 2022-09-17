import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAllCountries, selectStatus } from '../../features/countrySlice';
import { fetchCountries } from '../../features/countrySlice';
import CountryCard from '../CountryCard/CountryCard';
import './CountryWrapper.scss';

const CountryWrapper = () => {
  const dispatch = useAppDispatch();
  const allCountries = useAppSelector(selectAllCountries);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (status === 'loading') {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  return (
    <div className='country-wrapper'>
      {allCountries
        .map((country, index) => <CountryCard country={country} key={index} />)
        .slice(0, 8)}
    </div>
  );
};

export default CountryWrapper;
