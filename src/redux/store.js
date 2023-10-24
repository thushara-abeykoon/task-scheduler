import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./reducer/rootReducer";
import thunk from "redux-thunk";

const middleWare = [thunk]
const initialState = {}
export const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))