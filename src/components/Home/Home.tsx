import { Fragment } from 'react';

import SearchInput from '../SearchInput/SearchInput';
import Select from '../Select/Select';
import CountryWrapper from '../CountryWrapper/CountryWrapper';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <section className='search-section'>
        <SearchInput />
        <Select />
      </section>
      <section>
        <CountryWrapper />
      </section>
    </div>
  );
};

export default Home;
