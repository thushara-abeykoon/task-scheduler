import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css';
import HomeLeft from './components/HomeLeft';
import {generateDate} from "./utils/generateDate";
import Dashboard from "./components/Dashboard";
import TaskCalendar from "./components/TaskCalendar";

function Home() {
  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLeft />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<TaskCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
