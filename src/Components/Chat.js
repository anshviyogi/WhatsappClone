import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import axios from '../axios'

function Chat({messages}) {

  const[input,setInput] = useState('')

  const sendMessage = async e =>{
    e.preventDefault()

    await axios.post('/messages/new',{
      message: input,
      name:"Demo User",
      timestamp:'12:00Am',
      received:false
    })

    setInput('')
  }
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar/>

          <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at ....</p>
          </div>

          <div className='chat__headerRight'>
                <IconButton>
                <SearchOutlined/>
                </IconButton>

                <IconButton>
                <AttachFile/>
                </IconButton>

                <IconButton>
                <MoreVert/>
                </IconButton>
          </div>
        </div>

          <div className='chat__body'>
            {
              messages.map(message =>(
                <p className={`chat__message ${message.received && 'chat__reciever'}`}>
                <span className='chat__name'>{message.name}</span>
                {message.message}
                <span className='chat__timestamp'>{message.timestamp}</span>
                </p>
              ))
            }
          </div>

          <div className='chat__footer'>
            <InsertEmoticon/>
            <form>
              <input type='text' placeholder='Type your message' value={input} onChange={e => setInput(e.target.value)}/>
              <button onClick={sendMessage} type='submit'>Send a message</button>
              <Mic/>
            </form>
          </div>
    </div>
  )
}

export default Chat