import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
    const firebase = useContext(FirebaseContext) as any
    const store = firebase.firebaseInit.firebase_.firestore()
    
    const [userX, setUserX] = useState(JSON.parse(localStorage.getItem('authUser')??"{}"));
    const [user, setUser] = useState({})
    
    useEffect(() => {
        if (!firebase) return
        const listener = firebase.firebaseInit.firebase_.auth().onAuthStateChanged((authUser: any) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUserX(authUser);
                store.collection('users').get().then((collectionElement:any) => {

                    collectionElement.docs.forEach((doc: any) => {
                        const omething = doc.data()

                        if(omething.emailAddress == authUser.email) {
                        setUser(omething)
                        }
                    })
                })
            } else {
                localStorage.removeItem('authUser');
                setUserX(null);
            }
        });
        return () => listener();
    }, [firebase]);
    console.log(user)
    
    return {user} ;
}
