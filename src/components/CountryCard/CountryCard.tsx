import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import './CountryCard.scss';

interface CountryCardProps {
  country: {
    name: {
      common: string;
    };
    flags: {
      svg: string;
    };
    population: number;
    region: string;
    capital: string[];
  };
}
const CountryCard = ({ country }: CountryCardProps) => {
  const mode = useAppSelector(selectMode);
  return (
    <div
      className={`country-card-wrapper ${mode === 'dark' ? 'dark' : 'light'}`}
    >
      <img src={country.flags.svg} alt={country.name.common} />
      <div className='country-card-details'>
        <h3>{country.name.common}</h3>
        <p>
          <span>Population:</span> {country.population.toLocaleString('en-US')}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital[0]}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
