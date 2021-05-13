import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat.js'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [rooms, setRooms] = useState([])
    const [input, setInput] = useState('')
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        db.collection('Chat Room').onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
        })
    })

    return (
        <div className='sidebar'>
            <div className="header">
                <Avatar src={user?.photoURL}></Avatar>
                <div className="headerRight">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            <div className="search">
                <div className="searchContainer">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <form action="">
                        <input className='input' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search or start a new chat" />
                    </form>
                </div>
            </div>
            <div className="sidebarChats">
                <SidebarChat addNewChat></SidebarChat>
                {rooms.map(room => (
                    (room.data.name.includes(input))&&<SidebarChat key={room.id} id={room.id} name={room.data.name}></SidebarChat>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
