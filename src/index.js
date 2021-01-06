import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './Redux/Store/Store'
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './SharedComponents/NavigationBar'
import FooterPage from './SharedComponents/Footer'
import axios from 'axios'
import SwDev from '../src/ServiceWorker/SwDev'


axios.defaults.baseURL = " https://vocal-for-local-sep-20-api.herokuapp.com/"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavigationBar />
      <App />

      <FooterPage />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
SwDev();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

