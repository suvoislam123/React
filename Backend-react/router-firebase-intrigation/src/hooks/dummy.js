import { useEffect } from "react"
import { useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = ()=>{
    const [user, setUser] = useState({})
    const signInWithGoogle = ()=>{
        console.log('ei nai google');
        signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // console.log(credential);
            // console.log(result.user);
            setUser(result.user);

        })
        .catch((error)=>{
            console.error(error)
        })
    }
    const signOutFromGoogle = () =>{
        signOut(auth)
        .then(()=>{
            alert("Logout Successful")
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
        })
    },[])

    return {user,setUser,signInWithGoogle,signOutFromGoogle}
}
export default useFirebase;