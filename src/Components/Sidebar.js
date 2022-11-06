import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import { MoreVert,SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Sidebar Header Menu's */}
        <div className='sidebar__header'>
            <Avatar/>
            <div className='sidebar__headerRight'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                <ChatIcon/>
                </IconButton>

                <IconButton>
                <MoreVert/>
                </IconButton>
            </div>
        </div>

{/* Sidebar Search input */}
        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlined/>
            <input placeholder='Search or start new chat'/>
          </div>
        </div>

{/* Sidebar Chats */}
        <div className='sidebar__chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
        
    </div>
  )
}

export default Sidebar