import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {name,_id,picture,price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;