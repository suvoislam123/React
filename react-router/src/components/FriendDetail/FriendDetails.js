import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({})
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>This is a friend details about {friendId}</h1>
            <h2>Friend Name:{friend.name}</h2>
            <h4>Email: {friend.email}</h4>
            <h5>Website: {friend.website}</h5>
            <h4>City: {friend.address?.city}</h4>
            <p><small>Latitude:{friend.address?.geo?.lat}</small></p>
        </div>
    );
};

export default FriendDetails;