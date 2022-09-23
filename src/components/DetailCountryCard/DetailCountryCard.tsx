import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectFilterdCountries,
  findCountry,
  fetchCountries,
  fetchCodes,
  selectNameByCodes,
} from '../../features/countrySlice';
import { selectMode } from '../../features/modeSlice';
import { getLanguage, getCurrency, getNativeName } from '../../utils/utils';
import Borders from '../Borders/Borders';
import './DetailCountryCard.scss';

const DetailCountryCard = () => {
  const { countryId } = useParams();
  const dispatch = useAppDispatch();

  const filterdCountries = useAppSelector(selectFilterdCountries);
  const mode = useAppSelector(selectMode);
  const nameByCode = useAppSelector(selectNameByCodes);
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

  useEffect(() => {
    const waitForCountry = async () => {
      await dispatch(fetchCountries());
      dispatch(findCountry(countryId));
    };
    waitForCountry();
  }, [countryId, dispatch]);
  useEffect(() => {
    if (borders) {
      dispatch(fetchCodes(borders?.toString().toLowerCase()));
    }
  }, [borders, dispatch]);
  return (
    <div className='detail-country-wrapper'>
      <div className='image-wrapper'>
        <img src={flags.svg} alt={name.common} />
      </div>
      <div className='detail-country-text'>
        <h2>{name.common}</h2>
        <div className='country-info'>
          <div className='country-info-col'>
            <p>
              <span>Native Name:</span> {getNativeName(name.nativeName)}
            </p>
            <p>
              <span>Population:</span> {population.toLocaleString('en-US')}
            </p>
            <p>
              <span>Region:</span> {region}
            </p>
            <p>
              <span>Subregion:</span> {subregion}
            </p>
            <p>
              <span>Capital:</span> {capital}
            </p>
          </div>
          <div className='country-info-col'>
            <p>
              <span>Top Level Domain:</span> {tld}
            </p>
            <p>
              <span>Currencies:</span> {getCurrency(currencies)}
            </p>
            <p>
              <span>Languages:</span> {getLanguage(languages)}
            </p>
          </div>
        </div>
        <div className='borders'>
          <p>
            <span>Border Countries:</span>
          </p>
          {nameByCode ? (
            <ul>
              {nameByCode?.map((countryName: any | {}, index: number) => (
                <li
                  className={`${mode === 'dark' ? 'dark' : 'light'}`}
                  key={index}
                >
                  <Borders countryName={countryName} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No border countries.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailCountryCard;
