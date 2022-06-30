import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebase, FieldValue } from './lib/firebase';
import {FirebaseContext, FirestoreContext} from './context/firebase'
import App from './App'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <FirebaseContext.Provider value={firebase}>
      <FirestoreContext.Provider value={FieldValue}>
        <App/>
      </FirestoreContext.Provider>
    </FirebaseContext.Provider>
);
