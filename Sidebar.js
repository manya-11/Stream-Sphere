import React from 'react'
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from'@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutLinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutLinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
          <SidebarRow selected Icon ={HomeIcon} title ="Home"/>
          <SidebarRow Icon={WhatshotIcon}title ="Trending"/>
          <SidebarRow Icon ={SubscriptionsIcon} title ="Subscription"/>
          <hr/>
          <SidebarRow Icon ={VideoLibraryIcon} title ="Library"/>
          <SidebarRow Icon ={HistoryIcon} title ="History"/>
          <SidebarRow Icon ={OndemandVideoIcon} title ="Your videos"/>
          <SidebarRow Icon ={WatchLaterIcon} title ="Watch Later"/>
          <SidebarRow Icon ={ThumbUpAltOutLinedIcon} title ="Liked videos"/>
          <SidebarRow Icon ={ExpandMoreOutLinedIcon} title ="Show more"/>
          <hr/>
      </div>
    </div>
  )
}

export default Sidebar
