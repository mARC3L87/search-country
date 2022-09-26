import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  filterByRegion,
  selectAllCountries,
  fetchCountries,
} from '../../features/countrySlice';
import { selectMode } from '../../features/modeSlice';
import './Select.scss';

const Select = () => {
  const mode = useAppSelector(selectMode);
  const allCountries = useAppSelector(selectAllCountries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [dispatch, allCountries]);

  const onRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Filter by Regions') {
      return;
    }
    dispatch(filterByRegion(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className='select-wrapper'>
      <select
        onChange={onRegionChange}
        className={`region ${mode === 'dark' ? 'dark' : 'light'}`}
      >
        <option>Filter by Regions</option>
        <option value='africa'>Africa</option>
        <option value='americas'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  );
};

export default Select;
