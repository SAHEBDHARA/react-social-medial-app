import "./topbar.css"
import { Search } from "@mui/icons-material"
import { Person,Chat,Notifications } from "@mui/icons-material"
import {Link} from "react-router-dom"
import { useContext } from "react"
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {

  const {user} = useContext(AuthContext)

  return (
    <div className="topbarContainer">
     

       <div className="topbarLeft">
       <Link to="/">
         <span className="logo">Handycraft</span>
         </Link>
       </div>
       <div className="topbarCenter">
         <div className="searchbar">
           < Search className="searchIcon" />
           <input type="text" placeholder="Search for friend, post or any video" className="searchInput" />
         </div>
       </div>
       <div className="topbarRight">
         <div className="topbarLinks">
           <span className="topbarLink">Homepage</span>
           <span className="topbarLink">Timeline</span>
         </div>
         <div className="topbarIcons">
           <div className="topbarIconItem">
             <Person/>
             <span className="topbarIconBadge">1</span>
           </div>
           <div className="topbarIconItem">
             <Notifications/>
             <span className="topbarIconBadge">2</span>
           </div>
           <div className="topbarIconItem">
             <Chat/>
             <span className="topbarIconBadge">3</span>
           </div>
         </div>
         <Link to={`/profile/${user.username}`}>
         <img src={user.profilePicture ? user.profilePicture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" className="topbarImg" />
         </Link>
       </div>
      
    </div>
  )
}
