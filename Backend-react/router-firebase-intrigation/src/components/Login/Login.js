import React from "react";
import useFirebase from "../../hooks/useFirebase";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import app from "../../firebase.init";
import { getAuth } from "firebase/auth";
import { useState } from "react";
const auth = getAuth(app)
const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    // const [user] = useSignInWithGoogle()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <div className="App">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
      </div>
    );
};

export default Login;
