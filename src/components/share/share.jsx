import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

  const {user} = useContext(AuthContext)
  const desc = useRef()
  const [file,setFile] = useState(null)

  const submitHandeler = async(e)=>{
    e.preventDefault()
    const newPost ={
      userId: user._id,
      desc: desc.current.value
    }
    try {
      await axios.post("/posts",newPost)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={user.profilePicture ? user.profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" />
          <input placeholder={"What is in your mind " + user.username + "?"} ref={desc} type="text" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <form className="shareButton" onSubmit={submitHandeler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaIcon htmlColor="#f94144" className="shareIcons"/>
              <span className="shareOptionText">Photo of Video</span>
              <input type="file" style={{display:"none"}} id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <LocalOfferIcon htmlColor="#be0aff" className="shareIcons"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="#008000" className="shareIcons"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="#023e8a" className="shareIcons"/>
              <span className="shareOptionText">Feelings</span>
            </div>

          </div>
          <button className="buttonShare" type="submit">Share</button>

        </form>
      </div>
    </div>
  )
}
// tui 
