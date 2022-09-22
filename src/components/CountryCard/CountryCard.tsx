import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import { CountryCardProps } from './CountryCardInterface';
import './CountryCard.scss';

const CountryCard = ({ country }: CountryCardProps) => {
  const mode = useAppSelector(selectMode);
  return (
    <Link to={`/${country.name.common.toLowerCase()}`}>
      <div
        className={`country-card-wrapper ${mode === 'dark' ? 'dark' : 'light'}`}
      >
        <img src={country.flags.svg} alt={country.name.common} />
        <div className='country-card-details'>
          <h3>{country.name.common}</h3>
          <p>
            <span>Population:</span>{' '}
            {country.population.toLocaleString('en-US')}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital[0]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
