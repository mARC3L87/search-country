import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/countrySlice';
import './Select.scss';

const Select = () => {
  const mode = useAppSelector(selectMode);
  return (
    <div className='select-wrapper'>
      <select className={`region ${mode === 'dark' ? 'dark' : 'light'}`}>
        <option>Filter by Regions</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Select;
