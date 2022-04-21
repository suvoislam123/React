import React from 'react';
import Product from './Product';
const products = [
    {id:1,name:'book',price:120},
    {id:2,name:'brus',price:120},
    {id:3,name:'suno',price:120},
    {id:4,name:'mobile',price:120},
    {id:5,name:'t-shirt',price:120}
];

const Values = () => {
    return (
        <div>
            {
                products.map((d)=><Product data={d} key={d.id}></Product>)
            }
        </div>
    );
};

export default Values;