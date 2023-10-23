import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Home'
import Home from './Home';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {TestComponent} from "./components/TestComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <TestComponent />
    </Provider>
);

