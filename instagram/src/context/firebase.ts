import React, { createContext } from 'react';
import {app, firestore} from 'firebase'

const FirebaseContext = createContext <app.App | undefined>(undefined);
const FirestoreContext = createContext <firebase.firestore.Firestore | undefined>(undefined)

export {FirebaseContext, FirestoreContext};