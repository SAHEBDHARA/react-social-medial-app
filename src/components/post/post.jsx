import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postLeft">
                  <img className="postProfileImg" src="\accets\person\4.jpeg" alt="" />
                  <span className="postUsername">Sunetra Maity</span>
                  <span className="postDate">5 min ago</span>
                </div>
                <div className="postRight">
                  <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
              <span className="postTaxt"> Hey! Its my first post :)</span>
              <img className="postImg" src="\accets\post\2.jpeg" alt="" />
            </div>
            <div className="postBotton">
              <div className="postBottonLeft">
                <img className="LikeIcon" src="\accets\like.png" alt="" />
                <img className="LikeIcon" src="\accets\heart.png" alt="" />
                <span className="postLikeCounter">32 people like it</span>
              </div>
              <div className="postBottonRight">
                <span className="postCommentText">8 comment</span>
              </div>

            </div>

        </div>
    </div>
  )
}
