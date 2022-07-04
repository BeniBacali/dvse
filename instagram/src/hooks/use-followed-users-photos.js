import { useState, useEffect, useContext } from 'react';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';
import UserContext from '../context/user';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserByUserId(user.userId);
            let followedUsersPhotos = [];
            
            if (followingUserIds && followingUserIds[0].following.length > 0) {
                    const followedUsersPhotos = await getUserFollowedPhotos(user.userId, followingUserIds[0].following);

                    followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                    setPhotos(followedUsersPhotos);
                }
        }
        
        getTimelinePhotos();
    }, [user.userId]);
    
    return photos;
}