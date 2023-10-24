import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Home'
import Home from './Home';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Home/>
        </DevSupport>
    </Provider>
);

