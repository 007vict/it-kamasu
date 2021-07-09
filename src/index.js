import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
  debugger
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
             dispatch={store.dispatch.bind(store)}
             store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();



