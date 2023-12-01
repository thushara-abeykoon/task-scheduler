import * as actions from "./actionTypes";
import axios from "axios";

export const allTasksFetched = () => (dispatch) => {
  axios
    .get("http://localhost:8080/api/task")
    .then((res) => {
      dispatch({
        type: actions.TASK_FETCHED,
        payload: res.data,
      });
    })
    .catch((error) => {
      alert("Server Interrupted!");
      console.log(error);
    });
};

export const editorOpened = (date, method, id) => ({
  type: actions.EDITOR_OPENED,
  payload: {
    status: true,
    date,
    method,
    id,
  },
});

export const editorClosed = () => ({
  type: actions.EDITOR_CLOSED,
  payload: {
    status: false,
    date: null,
    method: null,
    id: null,
  },
});
