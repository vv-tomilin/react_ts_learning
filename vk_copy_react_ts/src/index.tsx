import React from 'react';
import ReactDOM from 'react-dom';

import AuthProvider from './components/providers/AuthProvider';

import Routes from './components/routes/Routes';

import * as firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyDm9CTeTskp-2xj-tFKI6GOkTi0mZiSSj8",
  authDomain: "vk-copy-react-ts.firebaseapp.com",
  projectId: "vk-copy-react-ts",
  storageBucket: "vk-copy-react-ts.appspot.com",
  messagingSenderId: "879515053900",
  appId: "1:879515053900:web:b39f1def4b36c44f3a69e9"
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
