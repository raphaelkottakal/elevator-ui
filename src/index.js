import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
import './index.css';

ReactGA.initialize('UA-1752831-18');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
