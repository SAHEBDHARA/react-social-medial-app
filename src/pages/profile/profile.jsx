import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/topbar"
import Feed from "../../components/feed/feed"
import Sidebar from "../../components/sidebar/sidebar"
import Rightbar from "../../components/rightbar/rightbar"
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"


export default function Profile() {

  const [user, setUser] = useState({})
  const username = useParams().username;
 
  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get(`/users?username=${username}`)
      setUser(res.data)
    };
    fetchUser()
  },[username]);


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
                  src={user.coverPicture || "https://thumbs.dreamstime.com/b/picture-electrical-dummy-plastic-cover-where-switches-to-fix-future-fixed-over-place-once-there-no-need-184784585.jpg"}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={user.profilePicture || "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={username}/>
              <Rightbar user={user}/>
            </div>
          </div>
        </div>
      </>
    );
  }


  
