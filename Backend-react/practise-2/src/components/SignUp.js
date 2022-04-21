import React from "react";
import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <form action="">
        <input type="email" placeholder="Enter your Email" />
        <input type="password" placeholder="Enter Your password" />
        <input type="password" placeholder="Enter  password again" />
        <button>Login</button>
        <Link to="/">Login With Facebook</Link>
      </form>
    </div>
  );
};

export default SignUp;
