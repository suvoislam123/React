import React from "react";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googlelog from "../../images/icon/google.png";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
    let errorElement;
  if (error || error1) {
    errorElement= (<div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
      </div>)
  }
  if (loading) {
    
  }
  if (user || user1) {
    
      navigate('/home')
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
        <p className="mt-2 mx-2">Or</p>
        <div style={{ height: "1px" }} className="w-50 bg-primary"></div>
      </div>
      {errorElement}
      <button onClick={()=>signInWithGoogle()} className="w-50 btn btn-primary d-block mx-auto my-2">
        {" "}
        <img height={"40px"} src={googlelog} alt="" />{" "}
        <span className="px-2">Sign in with Google</span>
      </button>
      <button className="w-50 btn btn-primary d-block mx-auto my-2 ">
        {" "}
        <img height={"40px"} src={googlelog} alt="" />{" "}
        <span className="px-2">Sign in with Facebook</span>
      </button>
      <button onClick={()=>signInWithGithub()}
       className="w-50 btn btn-primary d-block mx-auto my-2">
        {" "}
        <img height={"40px"} src={googlelog} alt="" />{" "}
        <span className="px-2">Sign in With Github</span>
      </button>
    </div>
  );
};

export default SocialLogin;
