import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import Components from './components/index';
import * as serviceWorker from './serviceWorker';
import "./router/routes.js"

// import Root from './router/routes';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
    <Components />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
