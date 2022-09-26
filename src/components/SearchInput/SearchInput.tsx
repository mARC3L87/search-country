import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { searchForCountry, clearCountry } from '../../features/countrySlice';
import { selectMode } from '../../features/modeSlice';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.scss';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputValue === '') {
      dispatch(clearCountry());
    }
    dispatch(searchForCountry(inputValue.toLowerCase()));
  }, [dispatch, inputValue]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <div className='search-input'>
      <FontAwesomeIcon
        className={`input-icon ${mode === 'light' ? 'grey' : ''}`}
        icon={faMagnifyingGlass}
      />
      <input
        className={`${mode === 'dark' ? 'dark' : 'light'}`}
        type='text'
        autoComplete='off'
        name='search'
        placeholder='Search for a country...'
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchInput;
