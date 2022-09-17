import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.scss';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const mode = useAppSelector(selectMode);

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
        name='search'
        placeholder='Search for a country...'
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchInput;
