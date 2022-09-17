import { useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { useAppDispatch } from '../../app/hooks';
import { fetchCountries } from '../../features/countrySlice';
import Select from '../Select/Select';
import './Home.scss';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  return (
    <section className='search-section'>
      <SearchInput />
      <Select />
    </section>
  );
};

export default Home;
