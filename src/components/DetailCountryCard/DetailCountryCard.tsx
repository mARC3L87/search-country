import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectFilterdCountries,
  findCountry,
  fetchCountries,
} from '../../features/countrySlice';
import './DetailCountryCard.scss';

const DetailCountryCard = () => {
  const { countryId } = useParams();
  const dispatch = useAppDispatch();
  const filterdCountries = useAppSelector(selectFilterdCountries);

  const {
    name,
    region,
    subregion,
    population,
    capital,
    currencies,
    tld,
    languages,
    borders,
    flags,
  } = filterdCountries;
  const currency = Object.entries(currencies) as any;
  const nativeName = Object.entries(name.nativeName) as any;

  useEffect(() => {
    const waitForCountry = async () => {
      await dispatch(fetchCountries());
      dispatch(findCountry(countryId));
    };
    waitForCountry();
  }, [countryId, dispatch]);

  return (
    <div className='detail-country-wrapper'>
      <img src={flags.svg} alt={name.common} />
      <div className='detail-country-text'>
        <h2>{name.common}</h2>
        <div className='country-info'>
          <div className='country-info-col'>
            {nativeName.length !== 0 && (
              <span>
                <p>Native Name: {nativeName[0][1].common}</p>
              </span>
            )}
            <span>
              <p>Population: {population.toLocaleString('en-US')}</p>
            </span>
            <span>
              <p>Region: {region}</p>
            </span>
            <span>
              <p>Subregion: {subregion}</p>
            </span>
            <span>
              <p>Capital: {capital}</p>
            </span>
          </div>
          <div className='country-info-col'>
            <span>
              <p>Top Level Domain: {tld}</p>
            </span>
            {currency.length !== 0 && (
              <span>
                <p>Currencies: {currency[0][1].name}</p>
              </span>
            )}
            {/* <p>Languages: {languages.lang}</p> */}
          </div>
        </div>
        <div className='borders'>
          <ul>
            {borders?.map((border) => (
              <li>{border}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailCountryCard;
