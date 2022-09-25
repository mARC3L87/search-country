import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className='spinner-wrapper'>
      <FontAwesomeIcon className='spinner-icon' icon={faSpinner} />
    </div>
  );
};

export default Spinner;
