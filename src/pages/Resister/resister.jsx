import "./resister.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
   const username = useRef();
   const email = useRef();
   const password = useRef();
   const passwordAgain = useRef();
   const navigate = useNavigate();

   const handleClick = async (e)=>{
    e.preventDefault();
    console.log(passwordAgain.current.value)
    console.log(password.current.value)
   if(passwordAgain.current.value !== password.current.value){
    passwordAgain.current.setCustomValidity("Password is not matching")
   }
   else{
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    try {
    await axios.post("/auth//resister", user)
    navigate("/login")
      
    } catch (error) {
      console.log(error)
    }
   }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Handicraft</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Handicraft.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input placeholder="Username" type="name" required ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email}  className="loginInput" />
            <input placeholder="Password" required type="password" minLength="6" ref={password}   className="loginInput" />
            <input placeholder="Password Again"  required ref={passwordAgain} type="password" className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}