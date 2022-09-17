import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import Home from '../Home/Home';
import TitleBar from '../TitleBar/TitleBar';
import './App.scss';

function App() {
  const mode = useAppSelector(selectMode);
  return (
    <div className={`App ${mode === 'dark' ? 'dark' : 'light'}`}>
      <TitleBar />
      <Home />
    </div>
  );
}

export default App;
