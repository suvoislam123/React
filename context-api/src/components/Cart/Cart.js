import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    let command;
    if(cart.length ==0)
    {
        command =<p>Please Add some Item</p>
    }
    else if(cart.length==1)
    {
        command = <p>Please Add more item please</p>
    }
    else{
        command = <p>Thanks for Adding</p>
    }
    return (
        <div>
            {command}
            <h1>This is a Cart</h1>
            {
                cart.map((product)=><p key={product._id}>{product.name}
                <button onClick={()=>handleRemoveFromCart(product)}> X</button>
                </p>)
            }
            {cart.length !==4? <p>keep Adding</p>:<button>Remove All</button>}
        </div>
    );
};

export default Cart;