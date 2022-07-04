import { createContext } from 'react';

// const FirebaseContext = createContext <app.App | undefined>(undefined);
// const FirestoreContext = createContext <firebase.firestore.Firestore | undefined>(undefined)
const FirebaseContext: any = createContext(null)

export {FirebaseContext}