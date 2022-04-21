import { useState,useEffect } from "react";
export const useData = ()=>
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[data])

    return [data,setData];
}