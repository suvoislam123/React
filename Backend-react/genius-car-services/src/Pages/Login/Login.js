import React from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {useLocation, useNavigate} from 'react-router-dom'
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorElement;
  const handleSubmit = (event) =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email,password)
      
  }
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  if(user)
  {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement= (<div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>)
  }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-primary">Please Login</h1>
      <div className="mx-auto w-50">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {errorElement}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>New to Genius car <span className="text-danger pointer" style={{cursor:'grab'}} onClick={()=>navigate('/signup')}>Please Register</span></p>
        <p>Forget Password? <span className="text-danger pointer" style={{cursor:'grab'}} onClick={async () => {
          await sendPasswordResetEmail(emailRef.current.value);
          alert('Sent email');
        }}>Reset Password</span></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
