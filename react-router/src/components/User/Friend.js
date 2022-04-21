import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username,id} = friend;
    const navigate = useNavigate();
    const showFriendDetails = ()=>{
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
           <h1>Name: {name}</h1>
           <Link to={`/friend/${id}`}>See Details</Link>
           <button onClick={showFriendDetails}>{username} id:{id}</button> 
        </div>
    );
};

export default Friend;