import { changeMode, selectMode } from '../../features/countrySlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as RegularMoon } from '@fortawesome/free-regular-svg-icons';
import './TitleBar.scss';

const TitleBar = () => {
  const mode = useAppSelector(selectMode);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`title-bar-container ${mode === 'dark' ? 'dark' : 'light'} `}
    >
      <div className='title-bar-wrapper'>
        <h2>Where in the world?</h2>
        <div onClick={() => dispatch(changeMode())} className='title-mode'>
          <FontAwesomeIcon
            className='moon'
            icon={mode === 'dark' ? faMoon : RegularMoon}
          />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
