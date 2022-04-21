import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="mt-5">
        <h1 className="text-center text-danger">
          The user is not verified by email
        </h1>
        <h3 className="text-center text-success">
          Please verify the email address
        </h3>
        <button
            className="btn btn-primary text-center d-block mx-auto"
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
