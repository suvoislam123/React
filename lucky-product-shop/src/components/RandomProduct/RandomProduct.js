import React from 'react';
import './RandomProduct.css'

const RandomProduct = ({randomItem}) => {
    return (
        <div className="random-selected-item">
                    
                    <img src= {randomItem.img} />
                    <h3>{randomItem.name}</h3>
                    
        </div>
    );
};

export default RandomProduct;