import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router-redux";
import { createStore } from "redux";


import skills from "./scenes/skills/reducers";

import './index.css';



const store = createStore((state = {}, action) => ({
  skillsPage: skills(state.skillsPage, action, state)
}));

// const store = createStore((state, action) => state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);