import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/App.jsx';
import store from './client/store';
import styles from './client/styles/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);