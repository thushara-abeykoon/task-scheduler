import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./stylesheets/App.css";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "./redux/actions";
import { connect } from "react-redux";
import { store } from "./redux/store";
import TaskEditor from "./components/TaskEditor";
import About from "./components/About";
import Header, { SearchBar, Tabs } from "./components/Header";
import Tasks from "./components/Tasks";

function Home(props) {
  useEffect(() => {
    props.allTasksFetched();
  });

  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <div className="home">
      <div className=" w-full bg-stone-900 text-white rounded-b-full pb-8 pt-4 flex justify-around items-center">
        <Tabs />
        <SearchBar />
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <TaskEditor />
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(Home);
