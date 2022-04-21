import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import RandomProduct from '../RandomProduct/RandomProduct';
import './Shop.css';
const Shop = () => {
    const [randomItem,setRandomItem] = useState([])
    const [cart,setCart] = useState([])
    const [products,setProducts] = useState([]);
    const handleAddToCart=(product)=>{
        // const newCart = [...cart,product];
        // setCart(newCart);
        // console.log(cart);
        const a = [...cart,product]
        const newcart = a.filter((data)=>{
            return data.id != product.id;
        });
        if(cart.length<4)
        {
            const filterCart = [...newcart,product];
            setCart(filterCart);
        }
        
    }

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(p=>setProducts(p))
    },[]);
    const chooseAgain=()=>{
        setCart([]);
    }
    const chooseOne=()=>{
        
       const randomIndex= Math.round(Math.random()*3);
       if(cart.length==4)
       {
        // console.log(cart[randomIndex]);
        const randomItem = cart[randomIndex];
        setRandomItem(randomItem);
       }else{
           alert('You have to select at least four items')
       }
    }
    const handleRemoveItem=(product)=>{
        const newArr= [...cart];
        const newCart = cart.filter((prod)=>{
            return product.id !=prod.id;
        });
        setCart(newCart);

    }
    return (
        <div className='shop'>
            <div className="products-container">
                
                {
                    products.map((product)=> <Product
                    product = {product}
                    key = {product.id}
                    handleAddToCart = {handleAddToCart}
                    
                    
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <h4>Total product in cart : {cart.length}</h4>
                <div className="cart-div">
                    <Cart 
                    cart = {cart}
                    handleRemoveItem={handleRemoveItem}
                    >

                    </Cart>
                </div>
                <div className="btn-div">
                    <button onClick={chooseOne} className='choose-btn'>Chose 1 for Me</button>
                    <br />
                    <br />
                    <button onClick={chooseAgain} className='choose-again-btn'>Chose Again</button>
                </div>
                <h3>Yor random Selected Item will appear Here</h3>
                <RandomProduct
                randomItem={randomItem}
                
                ></RandomProduct>
            </div>
        </div>
    );
};

export default Shop;