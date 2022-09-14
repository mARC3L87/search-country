import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './TitleBar.scss';

const TitleBar = () => {
  return (
    <div className='title-bar-container'>
      <div className='title-bar-wrapper'>
        <h2>Where in the world?</h2>
        <div className='title-mode'>
          <FontAwesomeIcon className='moon' icon={faMoon} />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
