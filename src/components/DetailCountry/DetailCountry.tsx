import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import { clearCountry } from '../../features/countrySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import DetailCountryCard from '../DetailCountryCard/DetailCountryCard';
import './DetailCountry.scss';

const DetailCountry = () => {
  const mode = useAppSelector(selectMode);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate('/');
    dispatch(clearCountry());
  };

  return (
    <section className='detail-country-container'>
      <div
        onClick={onClickBack}
        className={`back ${mode === 'dark' ? 'dark' : 'light'}`}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <p className='btn-back'>Back</p>
      </div>
      <DetailCountryCard />
    </section>
  );
};

export default DetailCountry;
