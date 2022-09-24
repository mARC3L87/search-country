import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { findCountry } from '../../features/countrySlice';
import { selectMode } from '../../features/modeSlice';
import { CountryCardProps } from './CountryCardInterface';
import './CountryCard.scss';

const CountryCard = ({ country }: CountryCardProps) => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  return (
    <Link
      onClick={() => dispatch(findCountry(country.name.common.toLowerCase()))}
      to={`/${country.name.common.toLowerCase()}`}
    >
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
          {country.capital && (
            <p>
              <span>Capital:</span> {country.capital[0]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
