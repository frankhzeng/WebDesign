// import react here:
import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import {App} from './App.js'
import senators from './senators.json';
//render the App component here!
ReactDOM.render(<App senatorsArr={senators}/>, document.getElementById("root"));

