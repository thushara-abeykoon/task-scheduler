import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/App.css';
import HomeLeft from './components/HomeLeft';
import Dashboard from "./components/Dashboard";
import TaskCalendar from "./components/TaskCalendar";
import {useEffect} from "react";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import {allTasksFetched} from "./redux/actions";
import {connect} from "react-redux";
import {store} from "./redux/store";
import TaskEditor from "./components/TaskEditor";

function Home(props) {

  useEffect(() => {
    props.allTasksFetched()
  });

  store.subscribe(()=>{
    console.log(store.getState())
  })



  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLeft />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<TaskCalendar />} />
          {/*<Route path='/test-component' element={<TestComponent />} />*/}
        </Routes>
      </BrowserRouter>
      <TaskEditor />
    </div>
  );
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({allTasksFetched},dispatch);
}

export default connect(null,matchDispatchToProps)(Home);
