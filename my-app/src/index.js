import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from "redux";

import App from './App';
import { reducer, oneMovie } from './states/reducers'

// const store =  createStore(reducer, applyMiddleware(thunk))


const monsterReducer = combineReducers({
    reducer: reducer,
    api: oneMovie
  });
  
  const store = createStore(
    monsterReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();