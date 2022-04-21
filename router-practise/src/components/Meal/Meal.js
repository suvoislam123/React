import React from 'react';
import {useNavigate,Link} from 'react-router-dom'

const Meal = (props) => {
    const navigate = useNavigate();
    const {idMeal,strMeal,strCategory,strMealThumb} = props.meal;
    const handleNavigate=()=>{
        navigate(`/meal-details/${idMeal}`)
    }
    return (
        <div>
            <h4>MealId : {idMeal}</h4>
            <p>Name : {strMeal}</p>
            <p>catagori: {strCategory}</p>
            <img src={strMealThumb} alt="" />
            <br />
            <Link to={`/meal-details/${idMeal}`}>See Details</Link>
            <button onClick={handleNavigate}>See More Details</button>
        </div>
    );
};

export default Meal;