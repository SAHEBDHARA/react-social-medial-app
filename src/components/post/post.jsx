import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {Users} from "../../dummyData"
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js"
import {Link } from "react-router-dom"

export default function Post({post}) {
  

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    };
    fetchUser()
  },[post.userId]);


  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }  


  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                  <Link to={`profile/${user.username}`}>
                  <img className="postProfileImg"
                   src={user.profilePicture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
                    alt="" />
                    </Link >
                  <span className="postUsername">
                    {user.username}
                    </span>
                  <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postRight">
                  <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
              <span className="postTaxt">{post?.desc}</span>
              <img className="postImg" src={post.img || "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} alt="" />
            </div>
            <div className="postBotton">
              <div className="postBottonLeft">
                <img className="LikeIcon"  src="\accets\like.png" onClick={likeHandler} alt="" />
                <img className="LikeIcon"  src="\accets\heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like}people like it</span>
              </div>
              <div className="postBottonRight">
                <span className="postCommentText">{post.comment} comment</span>
              </div>

            </div>

        </div>
    </div>
  )
}


