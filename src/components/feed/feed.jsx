import Share from"../share/share"
import Post from "../post/post"
import "./feed.css"
import { useEffect,useState } from "react";
import axios from "axios";

export default function Feed(Posts) {
  // const [posts,setPosts]=useState([]);

  // useEffect(()=>{
  //   const fetchPost = async () =>{
  //     const res = await axios.get("/posts/timeline/6257f0c1b2053f6f2d9a13a9")
  //     console.log(res)
  //   };
  //   fetchPost()
    
  // },[]);

  return (
    <div className="feed">
        <div className="feedWraper">
        <Share/>
       {Posts.map((p)=>(
        <Post key={p.id} post={p}/>
        ))}
        </div>
        </div>
  )
       }
//hh


