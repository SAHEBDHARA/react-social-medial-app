import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online";

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="accets\gift.png" alt="accets\gift.png" className="birthdayImg" />
            <span className="birthdayText">
              <b>Sunetra Maity</b> and <b>3 other friends </b>have a birthday today
            </span>
          </div>
          <img className="rightbarAd" src="accets\ad.png" alt=""/>
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightBarFriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
            
          </ul>
        </div>
    </div>
  )
}
// so on f

//pele so this is the new 