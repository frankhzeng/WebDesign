import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import Data from "./data/data.json";
import Head from './js/head';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head/>
    <App/>
  </React.StrictMode>
);
