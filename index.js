import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from "./components/login";
import SignUp from "./components/signup";

ReactDOM.render(
  <React.StrictMode>
   <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
