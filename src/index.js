import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Home'
import Home from './Home';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);

