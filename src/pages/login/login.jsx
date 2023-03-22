import './login.css'
import { CircularProgress } from '@mui/material';
import React, { useRef, useContext } from 'react'
import {loginCall} from "../../ApiCalls"
import { AuthContext } from '../../context/AuthContext';

export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch } = useContext(AuthContext)
  console.log(isFetching)


  const handleChange = (e)=>{
    e.preventDefault();
    loginCall(
      {email: email.current.value,password: password.current.value},
       dispatch
       )
  }
  console.log(user)
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Handicraft</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleChange}>
              <input placeholder="Email" type="email" required className="loginInput" ref={email} />
              <input placeholder="Password" type="password" minLength="6" required className="loginInput" ref={password} />
              <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit" size="22px" /> : "Log In"}</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton" >
              {isFetching ? <CircularProgress color="inherit" size="22px" /> : "Create a new Account"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
