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
import About from './components/About';
import Header, {SearchBar, Tabs} from "./components/Header";

function Home(props) {

  useEffect(() => {
    props.allTasksFetched()
  });

  store.subscribe(()=>{
    console.log(store.getState())
  })



  return (
    <div className='home'>
      <div className=' w-full bg-stone-900 text-white rounded-b-full pb-8 pt-4 flex justify-around items-center'>
                <Tabs />
                <SearchBar />
                <Header />
            </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLeft />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/calendar' element={<TaskCalendar />} />
          <Route path='/about' element={<About />} />
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
