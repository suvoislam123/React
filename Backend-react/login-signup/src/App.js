import logo from "./logo.svg";
import "./App.css";
import app from "./firebase.init";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
function App() {
  const [validated, setValidated] = useState(false);
  const [checked,setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      // return;
    }

    setValidated(true);
    if (form.checkValidity() !== false) {
      if(checked)
      {
        handleLogin();
      }
      else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          verifyEmail();
        })
        .catch((error) => {
          console.error(error);
        });
      }
    }
    event.preventDefault();
  };
  const handleBlurEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleBlurPassword = (event) => {
    setPassword(event.target.value);
  };
  const verifyEmail=()=>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log('email verification send');
    })
  }
  const handleForgetPassword=()=>{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log('password reset email sent successfully');
    })
  }
  const handleLogin = ()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error)=>{
      console.error(error)
    })
  }
  const handleCheckBox =(event)=>{
    console.log(event.target.checked);
    setChecked(event.target.checked);
  }
  return (
    <div>
      <div className="regestration w-50 mx-auto">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleBlurEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handleBlurPassword}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleCheckBox} type="checkbox" label="Already have an account?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            {checked ? 'Login' : 'Register'}
          </Button>
          <Button onClick={handleForgetPassword} variant="link">Forget password?</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
