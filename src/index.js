import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {createStore} from "redux";
import {Provider} from 'react-redux';

const initialState = {
    name: '777',
    count: 0
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case  'decrement':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const store = createStore(reducer);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
    // eslint-disable-next-line no-undef
    rootElement
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

