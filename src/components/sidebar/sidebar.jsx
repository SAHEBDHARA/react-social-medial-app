import "./sidebar.css"
import { RssFeed } from "@mui/icons-material"
import {Chat} from '@mui/icons-material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';





export default function sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarWraper">
         <ul className="sidebarList">
           <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
           </li>
           <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
           </li>
           <li className="sidebarListItem">
            <PlayCircleOutlineIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
           </li>
           <li className="sidebarListItem">
            <GroupsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
           </li>
           <li className="sidebarListItem">
            <BookmarkAddIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
           </li>

           <li className="sidebarListItem">
            <HelpOutlineIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
           </li>
          
           <li className="sidebarListItem">
            <WorkIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
           </li>
           <li className="sidebarListItem">
            <EmojiEventsIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
           </li>
           <li className="sidebarListItem">
            <SchoolIcon className="sidebarIcon"/>
            <span className="sidebarListItemText">Courses</span>
           </li>
         </ul>
       </div>
    </div>
  )
}
