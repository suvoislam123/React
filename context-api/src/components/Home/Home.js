import React, { useState } from "react";
import './Home.css'
import useTShirts from '../../hooks/useTShirts'
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
const Home = () => {
    const [tShirts,setTShirts] = useTShirts();
    const [cart,setCart] = useState([]);
    const handleAddToCart = (product)=>{
        const exist = cart.find(tshirt=> tshirt._id === product._id)
        if(exist)
        {
            alert('Items all-ready exist')
        }else{
            setCart([...cart,product]);
        }
        
    }
    const handleRemoveFromCart = (selectedItems)=>{
        const rest = cart.filter((tshirt)=>tshirt._id !== selectedItems._id);
        setCart(rest);
    }
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {
            tShirts.map((data)=><TShirt
            tshirt={data}
            key={data._id}
            handleAddToCart={handleAddToCart}

            
            ></TShirt>)
        }
      </div>
      <div className="cart-container">
        <h1>This is cart container</h1>
        <Cart cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
