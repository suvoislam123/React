import React from 'react';
import './Service.css'
import {useNavigate} from 'react-router-dom'
const Service = ({service}) => {
    const navigate = useNavigate()
    const {id,name,price,description,img} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h1>Name: {name}</h1>
            <p>Price {price}</p>
            <p>{description}</p>
            <button onClick={()=>navigate(`service/${id}`)}>Book {name}</button>
        </div>
    );
};

export default Service;