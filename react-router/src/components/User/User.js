import React, { useEffect, useState } from 'react';
import Friend from './Friend';
const User = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>You have to user: {users.length}</h1>
            <div>
            {
                users.map((friend)=> <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
            </div>
        </div>
    );
};

export default User;