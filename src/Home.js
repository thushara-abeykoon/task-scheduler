import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css';
import HomeLeft from './components/HomeLeft';
import Dashboard from "./components/Dashboard";
import TaskCalendar from "./components/TaskCalendar";
import TestComponent from "./components/TestComponent";
import {useEffect, useState} from "react";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {allTasksFetched} from "./redux/actions";
import {connect} from "react-redux";
import {store} from "./redux/store";
import TaskEditor from "./components/TaskEditor";

function Home(props) {
  useEffect(()=>{
    props.allTasksFetched();
  },[])

  store.subscribe(()=>{
    console.log(store.getState().taskReducer)
  })

  const [isActive, setIsActive] = useState(false)

  const handleIsActive = (isActive) => {
    setIsActive(isActive)
  }

  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLeft />} />
          <Route path='/dashboard' element={<Dashboard handleIsActive={handleIsActive} />} />
          <Route path='/calendar' element={<TaskCalendar />} />
          {/*<Route path='/test-component' element={<TestComponent />} />*/}
        </Routes>
      </BrowserRouter>
      <TaskEditor isActive={isActive } handleIsActive ={handleIsActive} />
    </div>
  );
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({allTasksFetched},dispatch);
}

export default connect(null,matchDispatchToProps)(Home);
