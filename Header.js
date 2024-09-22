import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCall from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar  from '@mui/material/Avatar';

function Header() {
  return (
    <div className="header">
      <div className='header_left'>
      <MenuIcon/>
      <img className="header_logo"src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png' alt=""/>
      </div>

      <div className=" header_input">
      <input placeholder= "Search" type ="text"/>
      <SearchIcon className="header_inputButton"/>
      </div>

      <div className ="header_icons">
      <VideoCall className="header_icon"/>
      <AppsIcon className="header_icon"/>
      <NotificationsIcon className="header_icon"/>
      <Avatar/>
      </div>
  
      
      
    </div>
  )
}

export default Header
