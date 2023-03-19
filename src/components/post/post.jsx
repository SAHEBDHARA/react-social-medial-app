import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Post({post}) {
  

  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }  


  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                  <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                  <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                  <span className="postDate">{post.date}</span>
                </div>
                <div className="postRight">
                  <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
              <span className="postTaxt">{post?.desc}</span>
              <img className="postImg" src={post.photo} alt="" />
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


