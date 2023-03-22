import Share from"../share/share"
import Post from "../post/post"
import "./feed.css"
import { useContext, useEffect,useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  // console.log(username)
  const {user} = useContext(AuthContext)


  useEffect(()=>{
    const fetchPost = async () =>{
          try{
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/" + user._id) 

      setPosts(res.data)
    }catch(err){
      console.log(err)
    } 
    };
    fetchPost()
  },[username,user._id]);


  return (
    <div className="feed">
        <div className="feedWraper">
        <Share/>
        {posts.map((p)=>(
        <Post key={p._id} post={p}/>
        ))} 
        </div>
        </div>
  )
}



      

      