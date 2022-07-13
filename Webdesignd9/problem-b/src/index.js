//import 'jsdom-global/register';
import React from '../node_modules/react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

import SAMPLE_DOGS from './dogs.json'; //a sample list of dogs (model)

ReactDOM.render(<App pets={SAMPLE_DOGS} />, document.getElementById('root'));
