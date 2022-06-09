import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData"

export default function Post({post}) {
  // console.log(post);



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
                <img className="LikeIcon" src="\accets\like.png" alt="" />
                <img className="LikeIcon" src="\accets\heart.png" alt="" />
                <span className="postLikeCounter">{post.like}people like it</span>
              </div>
              <div className="postBottonRight">
                <span className="postCommentText">{post.comment} comment</span>
              </div>

            </div>

        </div>
    </div>
  )
}
// now  i an=
