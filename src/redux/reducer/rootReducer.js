import {combineReducers} from "redux";
import {taskReducer, taskEditorReducer} from "./reducers";

export const rootReducer= combineReducers({
    taskReducer,
    taskEditorReducer
})