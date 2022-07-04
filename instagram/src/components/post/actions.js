import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../context/firebase'
import UserContext from '../../context/user';

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus }) {
    const { user } = useContext(UserContext)
    const [toggleLiked, setToggleLiked] = useState(likedPhoto);
    const [likes, setLikes] = useState(totalLikes);
    const firebase = useContext(FirebaseContext);
    
    const handleToggleLiked = async () => {
        setToggleLiked((toggleLiked) => !toggleLiked);
        
        await firebase
            .firebaseInit
            .firebase_
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: toggleLiked ? firebase.FieldValue.arrayRemove(user.userId) : firebase.FieldValue.arrayUnion(user.userId)
            });
        
        setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1));
    }
    
    return (
        <>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <svg
                        onClick={() => handleToggleLiked((toggleLiked) => !toggleLiked)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleToggleLiked((toggleLiked) => !toggleLiked);
                            }
                        }}
                        className={`w-8 mr-4 select-none cursor-pointer ${
                            toggleLiked ? 'fill-current text-red-600' : 'text-black'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                    <svg
                        onClick={handleFocus}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleFocus();
                            }
                        }}
                        className="w-8 text-black-light select-none cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        tabIndex={0}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                </div>
            </div>
            <div className="p-4 py-0">
                <p className="font-bold">{likes === 1 ? `${likes} like` : `${likes} likes`}</p>
            </div>
        </>
    )
}