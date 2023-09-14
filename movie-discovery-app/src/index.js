import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can import your styles here
import App from './App'; // Your main component goes here
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
