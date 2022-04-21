import logo from "./logo.svg";
import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut,GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(app);
function App() {
  const [user , setUser]  = useState({});
  // useEffect(()=>{
  //   setUrl(user)
  // },[user])
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        console.log(user.displayName)
        console.log(user.photoURL);
        setUser(user)
      })
      .catch((error) => {
        console.log(error);
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // //
      });
  }
  const handleGithubSignIn= ()=>{
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    setUser(user)
    console.log(user);
    }).catch((error)=>{
      console.error(error);
    })

  }
  const handleSignOut = () =>{
    signOut(auth).then(()=>{
      console.log('sign Out successful');
      setUser({})
    }).catch((error)=>{
      console.error(error);
    })
  }
  return (
    <div className="App">
      {user.uid?<button onClick={handleSignOut}>Sign Out</button>:<div><button onClick={handleGoogleSignIn}>Sign in with google</button><button onClick={handleGithubSignIn}>Sign in with github</button></div>}
      
      <img src={user.photoURL} alt="" />
      <h1>{user.displayName ?'Name:'+user.displayName:''}</h1>
      <h1>{user.email ? 'Email:'+user.email:''}</h1>
      
      
    </div>
  );
}

export default App;
