import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

export function Tabs() {
  const tabDecoration =
    "text-xl relative after:bg-white after:absolute after:h-0.5 after:w-0 after:top-7 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer";

  return (
    <div className=" font-thin flex w-1/4 justify-between text-xl  underline-offset-8">
      <Link to="" className={tabDecoration}>
        calender
      </Link>
      <Link to="tasks" className={tabDecoration}>
        tasks
      </Link>
      <Link to="about" className={tabDecoration}>
        about
      </Link>
    </div>
  );
}

export function MobileTabs() {
  const [tabsIsActive, setTabsIsActive] = useState(false);

  return (
    <div className="text-4xl fixed left-5 top-6 z-50">
      <TiThMenu
        onClick={() => {
          setTabsIsActive(tabsIsActive ? false : true);
        }}
      />
      {tabsIsActive ? (
        <div className="fixed w-3/4 h-full py-5 text-2xl top-24 left-0 flex flex-col bg-stone-900 rounded-b-3xl bg-opacity-80 backdrop-blur-md">
          <Link to="">
            <div className="px-8 active:bg-black hover:pr-10 bg-opacity-100 py-5">
              calender
            </div>
          </Link>
          <Link to="tasks">
            <div className="px-8 active:bg-black bg-opacity-100 py-5">
              tasks
            </div>
          </Link>
          <Link to="about">
            <div className="px-8 active:bg-black bg-opacity-100 py-5">
              about
            </div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export function SearchBar() {
  const [searchText, setSearchText] = useState();

  return (
    <div className="border-2 px-4 py-2 rounded-full flex items-center">
      <input
        className="outline-0 text-lg bg-transparent mr-3"
        placeholder="search tasks"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <FaSearch className="text-xl cursor-pointer text-stone-500" />
    </div>
  );
}

export default function Header() {
  return (
    <div>
      <h1 className="font-thin text-5xl">task scheduler</h1>
    </div>
  );
}
