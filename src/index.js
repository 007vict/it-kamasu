import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SamuraiJSApp from "./App";


let rerenderEntireTree = () => {

  ReactDOM.render(
        <SamuraiJSApp />, document.getElementById('root'));
}

rerenderEntireTree()
reportWebVitals();



