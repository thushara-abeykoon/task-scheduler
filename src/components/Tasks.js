import React, { useEffect, useState } from "react";
import Task from "./Task";
import { store } from "../redux/store";
import bindActionCreators from "react-redux/es/utils/bindActionCreators";
import { allTasksFetched } from "../redux/actions";
import { connect } from "react-redux";
import TaskViewer from "./TaskViewer";

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

  const [id, setId] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleViewer = (id, visible) => {
    setId(id);
    setVisible(visible);
  };

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
            handleViewer={handleViewer}
          />
        ))}
      </div>
      <TaskViewer id={id} visible={visible} handleViewer={handleViewer} />
    </div>
  );
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ allTasksFetched }, dispatch);
}

export default connect(null, matchDispatchToProps)(Tasks);
