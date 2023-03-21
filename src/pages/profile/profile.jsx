import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/topbar"
import Feed from "../../components/feed/feed"
import Sidebar from "../../components/sidebar/sidebar"
import Rightbar from "../../components/rightbar/rightbar"
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function Profile() {

  const [user, setUser] = useState({})
  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=saikat`)
      console.log(res)
      console.log(user.username)
      console.log(user.desc)
      setUser(res.data)
    };
    fetchUser()
  },[]);


    return (
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="https://images.unsplash.com/photo-1561242197-27f057ad344f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80"
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src="https://images.unsplash.com/photo-1569343285904-001a0ee57edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username="saikat"/>
              <Rightbar profile/>
            </div>
          </div>
        </div>
      </>
    );
  }


  
