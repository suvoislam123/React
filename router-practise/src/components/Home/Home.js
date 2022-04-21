import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [text,setText] = useState('');
    const [meals,setMeals] = useState([]);
    const handleOnChange=(e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
        .then(res => res.json())
        .then(data => setMeals(data?.meals))
    },[text])
    return (
        <div>
            <input onChange={handleOnChange} type="text" className='shadow appearance-none border border-red-500 rounded w-25 py-2 px-3 text-gray-700'/>
            <div className="meals grid grid-cols-3 gap-x-5">
                {
                    meals.map((meal)=><Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;