import React from 'react';
import './App.css'
import { addToStorage } from './utilities/addToStorage';

const Product = (props) => {
    const {name,price,id} = props.data;
    const addTocart=(idd)=>{
        // localStorage.setItem('shuvo'+id,1)
        addToStorage(idd)
        console.log('Added to cart',idd);
    }
    // const addTocartwithParams = ()=>addTocart(id);
    return (
        <div className='border'>
            <h1>Name : {name}</h1>
            <p>Price: {price}</p>
            <p>id : {id}</p>
            {/* <button onClick={addTocartwithParams}>Add to Cart</button> */}
            <button onClick={()=>addTocart(id)}>Add to Cart</button>
            
        </div>
    );
};

export default Product;