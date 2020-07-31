import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import Provider from './StoreContext';
import StoreContext from './StoreContext';
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
           </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
//First render on load
rerenderEntireTree();
//rerender after changed
store.subscribe(() => {
    rerenderEntireTree();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
