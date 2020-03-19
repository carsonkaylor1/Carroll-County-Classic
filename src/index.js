import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

//tells server to load anything that's in a file called .env into an environment variable
require('dotenv').config();

const config = {
    apiKey: process.env.API_KEY,
    authDomain: "carrollcountyclassic.firebaseapp.com",
    databaseURL: "https://carrollcountyclassic.firebaseio.com",
    projectId: "carrollcountyclassic",
    storageBucket: "carrollcountyclassic.appspot.com",
    messagingSenderId: "351731689888",
    appId: "1:351731689888:web:733b4ad00e614f4f099cc5",
    measurementId: "G-VBBRRJHDLN"
  };
firebase.initializeApp(config);


ReactDOM.render(
      <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'),
  );
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
