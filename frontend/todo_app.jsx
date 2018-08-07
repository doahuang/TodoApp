import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  );
});