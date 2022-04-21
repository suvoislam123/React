import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,price} = props.product;
    const {handleAddToCart,product} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(product)} className='product-btn'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;