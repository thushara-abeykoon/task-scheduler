import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./stylesheets/App.css";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "./redux/actions";
import { connect } from "react-redux";
import { store } from "./redux/store";
import TaskEditor from "./components/TaskEditor";
import About from "./components/About";
import Header, { MobileTabs, SearchBar, Tabs } from "./components/Header";
import Tasks from "./components/Tasks";
import NotFound from "./components/NotFound";

function Home(props) {
  useEffect(() => {
    props.allTasksFetched();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  store.subscribe(() => {
    console.log(store.getState());
  });

  return (
    <div className="home">
      <div className=" w-full bg-gradient-to-r from-indigo-900 to-red-900 text-white  pb-8 pt-4 flex justify-around items-center">
        {windowWidth < 1000 ? <MobileTabs /> : <Tabs />}
        {/* <SearchBar /> */}
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <TaskEditor />
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(Home);
