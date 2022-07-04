import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseInit, FieldValue } from './lib/firebase';
import {FirebaseContext} from './context/firebase'
import App from './App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <FirebaseContext.Provider value={{firebaseInit, FieldValue}}>
        <App/>
    </FirebaseContext.Provider>
);
