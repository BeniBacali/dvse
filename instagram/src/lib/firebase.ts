import firebase from 'firebase'
//import { seedDatabase } from '../seed';

const config: {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
} = {
    apiKey: "AIzaSyCzS_4f6VKXO_aBn7rv0rarzWP1K1AcOTY",
    authDomain: "my-first-project---instagram.firebaseapp.com",
    projectId: "my-first-project---instagram",
    storageBucket: "my-first-project---instagram.appspot.com",
    messagingSenderId: "968692059644",
    appId: "1:968692059644:web:2ec10d94402b6dc3d17679",
  };

const firebaseInit = firebase.initializeApp(config)
const FieldValue = firebase.firestore(firebaseInit);

//seedDatabase(firebaseInit)

export { firebaseInit as firebase, FieldValue };