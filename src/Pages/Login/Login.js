import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {handleGoogle,setUser,setError} = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/home'

  const handleGoogleAndRedirect = () => {
      handleGoogle()
      .then((result) => {
          setUser(result.user)
          history.push(redirect_url)
  })
  .catch((error) => {
      setError(error.message)
  });
 
  }
  return (
    <div className="my-5">
      <h2>login With Google</h2>
      <button onClick={handleGoogleAndRedirect} className="btn default-bg text-white border-0">
        Google SingIn
      </button>
    </div>
  );
};

export default Login;
