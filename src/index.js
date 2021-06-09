import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Ok!'}
]
let posts = [
  {id: 1, message: 'Hi!How are you?', likesCount: 55},
  {id: 2, message: 'It\'s my first post))', likesCount:15},
  {id: 3, message: 'Ok!'}
]
let dialogs = [
  {id: 1, name: 'Victor'},
  {id: 2, name: 'Dim'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Artur'},
  {id: 5, name: 'Ivan'},
  {id: 6, name: 'Vania'},
  {id: 7, name: 'Lena'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} message={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
