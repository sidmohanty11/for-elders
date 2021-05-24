import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import '../components/Login.css';

const Login = () => {
  const history = useHistory();
  const signIn = async () => {
    await auth.signInWithPopup(provider).catch(history.push('/'));
    history.push("/register");
  };
  return (
    <div className="whole_container">
      <div className="login_container">
        <img src="./logo.png" className="logo_img" />
        <Button onClick={signIn} variant="outlined">
          <img style={{ width:"20px", height:"20px", marginRight:"5px"}} src="./google.jpg" />Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
