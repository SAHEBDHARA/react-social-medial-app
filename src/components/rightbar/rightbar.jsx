import "./rightbar.css"

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
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="accets\person\5.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername"> Modon Lal</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="accets\person\2.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername"> Sourish Mondal</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="accets\person\4.jpeg" alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">Sunetra Maity</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
