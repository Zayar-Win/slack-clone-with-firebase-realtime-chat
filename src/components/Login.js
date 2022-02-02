import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login(props) {
  const [state, dispatch] = useStateValue();

  const googleSignin = () => {
    signInWithPopup(auth, Provider)
      .then((res) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://cdn.dribbble.com/users/121337/screenshots/5885287/slack.png?compress=1&resize=400x300'
          alt=''
        />
        <h1>Welcome from Slack</h1>
        <Button onClick={googleSignin}>
          Sign in with google
        </Button>
      </div>
    </div>
  );
}

export default Login;
