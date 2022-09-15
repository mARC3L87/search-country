import SearchInput from '../SearchInput/SearchInput';
import Select from '../Select/Select';
import './Home.scss';

const Home = () => {
  return (
    <section className='search-section'>
      <SearchInput />
      <Select />
    </section>
  );
};

export default Home;
