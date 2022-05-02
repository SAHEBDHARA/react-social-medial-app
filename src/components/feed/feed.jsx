import Share from"../share/share"
import Post from "../post/post"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWraper">
        <Share/>
        <Post/>
        </div>
        </div>
  )
}

