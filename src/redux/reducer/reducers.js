import * as actions from "../actionTypes";
import axios from "axios";
export function taskReducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_FETCHED:
      return action.payload;

    case actions.TASK_REMOVED:
      return state.filter((task) => task.id !== action.payload.id);

    case actions.TASK_UPDATED:
      return state.filter((task) =>
        task.id === action.payload.id ? action.payload : task
      );

    default:
      return state;
  }
}

export function taskEditorReducer(
  state = { status: false, date: null },
  action
) {
  switch (action.type) {
    case actions.EDITOR_OPENED:
      return action.payload;
    case actions.EDITOR_CLOSED:
      return action.payload;
    default:
      return state;
  }
}
