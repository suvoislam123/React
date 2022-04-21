import React from "react";
import "./SignUp.css";
import {useNavigate} from 'react-router-dom'
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth'
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin";
import { useState } from "react";
const SignUp = () => {
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      if(user)
      {
        console.log(user);
      }
    const navigate = useNavigate();
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        // if(agree)
        // {
        //   createUserWithEmailAndPassword(email,password)
        // }
        await createUserWithEmailAndPassword(email,password)
        // await updateProfile({ displayName, photoURL });
        await updateProfile({ displayName : name});
        navigate('/home')
    }
  return (
    <div className="register-form">
        <h1 className="text-center text-primary">Please Regester</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" name="name"/>
        <input type="email" placeholder="your email" name="email"/>
        <input type="password" placeholder="your password" name="password"/>
        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id='terms'/>
        <label htmlFor="terms" className={agree?'text-primary':'text-danger'}>Accept Genius Car Terms and Conditions</label>
        <input disabled={!agree} type="submit" value="Register" />
      </form>
      <p>Already have an account <span className="text-danger pointer" style={{cursor:'grab'}} onClick={()=>navigate('/login')}>Please Register</span></p>
      <SocialLogin></SocialLogin>
    </div>
    
  );
};

export default SignUp;
