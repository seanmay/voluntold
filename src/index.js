import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router-redux";
import { createStore } from "redux";

import { combineReducers } from "./lib/redux-helpers";
import skillsPage from "./scenes/skills/reducers";

import './index.css';

const store = createStore(combineReducers({ skillsPage }), {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);