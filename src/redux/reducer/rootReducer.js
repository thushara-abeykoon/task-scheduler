import {combineReducers} from "redux";
import reducers from "./reducers";

export const rootReducer= combineReducers({
    taskReducer: reducers
})