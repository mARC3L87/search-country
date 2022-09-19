import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import DetailCountryCard from '../DetailCountryCard/DetailCountryCard';
import './DetailCountry.scss';

const DetailCountry = () => {
  const mode = useAppSelector(selectMode);

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate('/');
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
