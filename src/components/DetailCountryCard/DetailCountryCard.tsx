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

  useEffect(() => {
    const waitForCountry = async () => {
      await dispatch(fetchCountries());
      dispatch(findCountry(countryId));
    };
    waitForCountry();
  }, [countryId, dispatch]);
  console.log(filterdCountries.name.common);

  return (
    <div>
      <h1>{filterdCountries.name.common}</h1>
    </div>
  );
};

export default DetailCountryCard;
