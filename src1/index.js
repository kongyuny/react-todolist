import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import List from './comment/List/List';
import { Provider } from 'react-redux';



var app = (
    <Provider store = {store}>
        <List/>
    </Provider>
    );

ReactDOM.render(app, document.getElementById('root'));

