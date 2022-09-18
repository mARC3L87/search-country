import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectMode } from '../../features/modeSlice';
import Home from '../Home/Home';
import DetailCountry from '../DetailCountry/DetailCountry';
import TitleBar from '../TitleBar/TitleBar';
import './App.scss';

function App() {
  const mode = useAppSelector(selectMode);
  return (
    <div className={`App ${mode === 'dark' ? 'dark' : 'light'}`}>
      <TitleBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path=':countryId' element={<DetailCountry />} />
      </Routes>
    </div>
  );
}

export default App;
