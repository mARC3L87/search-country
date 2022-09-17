import { Fragment } from 'react';

import SearchInput from '../SearchInput/SearchInput';
import Select from '../Select/Select';
import CountryWrapper from '../CountryWrapper/CountryWrapper';
import './Home.scss';

const Home = () => {
  return (
    <Fragment>
      <section className='search-section'>
        <SearchInput />
        <Select />
      </section>
      <section className='country-section'>
        <CountryWrapper />
      </section>
    </Fragment>
  );
};

export default Home;
