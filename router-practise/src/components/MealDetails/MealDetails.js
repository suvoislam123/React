import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';


const MealDetails = () => {
    const {mealId} = useParams();
    const [meal,setMeal] = useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    })
    return (
        <div>
           <h4>MealId : {meal[0]?.idMeal}</h4>
            <p>Name : {meal[0]?.strMeal}</p>
            <p>catagori: {meal[0]?.strCategory}</p>
            <img src={meal[0]?.strMealThumb} alt="" />
            <br /> 
        </div>
    );
};

export default MealDetails;