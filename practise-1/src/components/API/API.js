import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from '../User/User';

const API = () => {
    const [users,setUsers]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    return (
        <div>
            {
                users.map((data)=>{ 
                return(<User obj={data} key={data.id}/>)
            })
            }
        </div>
    );
};

export default API;