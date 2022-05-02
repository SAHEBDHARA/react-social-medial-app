import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="\accets\person\1.jpeg" alt="" />
          <input placeholder="What is in your mind" type="text" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareButton">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="#f94144" className="shareIcons"/>
              <span className="shareOptionText">Photo of Video</span>
            </div>
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
          <button className="buttonShare">Share</button>

        </div>
      </div>
    </div>
  )
}
