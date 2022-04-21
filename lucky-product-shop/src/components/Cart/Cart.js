import React from 'react';
import { useState } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css'

const Cart = ({cart,handleRemoveItem}) => {
    
    return (
        <div className='cart-container'>
            <div className="selected-items">
                {
                    cart.map((product)=><SelectedProduct
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    >

                    </SelectedProduct>)
                }
            </div>
            
        </div>
    );
};

export default Cart;