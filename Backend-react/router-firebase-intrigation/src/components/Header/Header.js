import { getAuth ,signOut} from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../../hooks/useFirebase";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const auth = getAuth(app)

    // const {user,signOutFromGoogle} = useFirebase();
    const [user, loading, error] = useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {user && <Link to="/orders">Order</Link>}
        <Link to="/register">Register</Link>
        {/* <Link to="/orders">Order</Link> */}
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? <button onClick={()=>signOut(auth)}>Sign Out</button> : <Link to="/login">Login</Link>}
        
      </nav>
    </div>
  );
};

export default Header;
