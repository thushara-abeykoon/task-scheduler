import axios from "axios";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "../redux/actions";
import { connect } from "react-redux";
import TaskViewer from "./TaskViewer";

function Task({
  id,
  title,
  //   desc,
  taskType,
  date,
  //   dateCreated,
  //   url,
  //   dateUpdated,
  status,
  allTasksFetched,
  handleViewer,
}) {
  const [optionsDisplay, setOptionsDisplay] = useState(false);

  const helloWorld = () => {
    console.log("hello world");
  };

  const deleteTask = (id) => {
    const res = axios
      .delete(`http://localhost:8080/api/task/${id}`)
      .then((res) => {
        allTasksFetched();
        return res;
      })
      .catch((err) => err);
    console.log(res);

    return res;
  };

  return (
    <div
      onMouseEnter={() => {
        setOptionsDisplay(true);
      }}
      onMouseLeave={() => {
        setOptionsDisplay(false);
      }}
      className=" text-stone-500 place-items-center border-2 border-black px-10 py-3 mt-5 flex justify-between rounded-lg backdrop-blur-sm hover:bg-blue-200 "
    >
      <div className="w-64">
        <h3 className="text-xl text-black">{title}</h3>
        <div className="flex justify-between w-64">
          <p className="text-xs">{taskType}</p>
          <p className="text-xs">{date.substring(0, 10)}</p>
        </div>
      </div>
      <div
        className={
          optionsDisplay
            ? "opacity-100 flex w-40 justify-between"
            : "opacity-0 flex w-20 justify-between"
        }
      >
        <OptionButton
          elm={
            <MdOutlineRemoveRedEye
              onClick={() => {
                handleViewer(id, true);
              }}
            />
          }
        />
        <OptionButton elm={<MdOutlineModeEdit />} />
        <OptionButton
          elm={
            <MdDeleteOutline
              onClick={() => {
                deleteTask(id);
              }}
            />
          }
        />
      </div>
      <div className="w-24">
        <p
          className={`text-xs ${
            status === "IN_PROGRESS"
              ? "text-blue-600"
              : status === "SCHEDULED"
              ? "text-yellow-800"
              : "text-green-600"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(Task);

const OptionButton = ({ elm }) => {
  return (
    <div className="cursor-pointer p-2 border-2 border-stone-800 bg-stone-100 text-stone-800 rounded-xl text-3xl hover:text-white hover:bg-stone-800">
      {elm}
    </div>
  );
};

// const taskAdded = (title, desc, taskType, date, dateCreated, url, dateUpdated= null, status = "SCHEDULED",) => {
