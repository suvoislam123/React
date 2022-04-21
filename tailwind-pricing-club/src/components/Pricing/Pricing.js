import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const options = [
        {id:1,name:'Free',price:'$0'},
        {id:2,name:'regular',price:'$19.99'},
        {id:2,name:'Premium',price:'$99.99'}
    ]
    return (
        <div className='bg-indigo-300 p-6 mt-5'>
            <h1 className='text-6xl text-center font-serif'>Best deal of the Town</h1>
            <div className='md:grid grid-cols-3 gap-3 mt-8'>
                {
                    options.map((option)=><PricingOption id={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
        
    );
};

export default Pricing;