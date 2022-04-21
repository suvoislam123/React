import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Postdetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(post=>setPost(post))
    },[postId])
    return (
        <div>
            <h1>This is postDetails</h1>
            <h1>Title:{post.title}</h1>
            <p>Details:{post.body}</p>
            <h3>Id:{post.id}</h3>

        </div>
    );
};

export default Postdetails;