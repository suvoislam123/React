import { useEffect, useState } from "react"

export const useReviews = ()=>{
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=> res.json())
        .then(reviews=>setReviews(reviews))
    },[])

    return [reviews,setReviews];
}