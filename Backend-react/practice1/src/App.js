import logo from './logo.svg';
import './App.css';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';

const provider = new FacebookAuthProvider();
const auth = getAuth(app)
const handleSignInWithPopup = ()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    console.log(result.user);
    alert('login successful')
  })
  .catch((error)=>{
    console.error(error);
  })
}
function App() {
  return (
    <div className="App">
      <button onClick={handleSignInWithPopup}>Click to sign In </button>
    </div>
  );
}

export default App;
