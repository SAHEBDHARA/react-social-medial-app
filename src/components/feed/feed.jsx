import Share from"../share/share"
import Post from "../post/post"
import "./feed.css"
import { useEffect,useState } from "react";
import axios from "axios";

export default function Feed({username}) {
  const [posts,setPosts]=useState([]);
  // console.log(username)


  useEffect(()=>{
    const fetchPost = async () =>{
          try{
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("posts/timeline/6257dced5116d9cb97bcd954") 

      setPosts(res.data)
    }catch(err){
      console.log(err)
    } 
    };
    fetchPost()
  },[]);


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



      

      