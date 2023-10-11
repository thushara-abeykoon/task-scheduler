import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeLeft from './components/HomeLeft';

function Home() {
  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLeft />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
