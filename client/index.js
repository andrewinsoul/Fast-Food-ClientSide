import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Routes from './routes';
import './public/styles/main.css';

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);
