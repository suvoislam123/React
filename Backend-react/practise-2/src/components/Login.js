import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);
      
    const handleSubmit = (event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);


    }
    return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Your password" />
        <input type="submit" value='Login' />
        <Link to="/">Login With Facebook</Link>
      </form>
    </div>
  );
};

export default Login;
