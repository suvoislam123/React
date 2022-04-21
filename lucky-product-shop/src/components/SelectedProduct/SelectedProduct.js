import React from 'react';
import './SelectedProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const SelectedProduct = ({product,handleRemoveItem}) => {
    const {img,id,name} = product;
    
    
    return (
        <div className='selected-product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <button onClick={()=>handleRemoveItem(product)}><FontAwesomeIcon style={{color:'red'}} icon={faDeleteLeft}></FontAwesomeIcon></button>
        </div>
    );
};

export default SelectedProduct;