import React, { useEffect, useState } from "react";
import Task from "./Task";
import { store } from "../redux/store";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "../redux/actions";
import { connect } from "react-redux";

function Tasks(props) {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    props.allTasksFetched();
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      setTasksList(store.getState().taskReducer);
    });
  });
  console.log(tasksList);
  return (
    <div className="p-10">
      <div className="flex justify-end">
        <p className="mr-2">Sort By :</p>
        <select className="rounded outline-none border-2 border-black">
          <option>Date Created</option>
          <option>Title</option>
          <option>Task Type</option>
          <option>Status</option>
        </select>
      </div>
      <div className="h-96 overflow-auto rounded-lg">
        {tasksList.map((elm) => (
          <Task
            id={elm.id}
            title={elm.title}
            taskType={elm.taskType}
            date={elm.date}
            status={elm.status}
          />
        ))}
      </div>
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(Tasks);
