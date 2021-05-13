import React, { useState, useEffect } from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
import db from './firebase.js';
import { Link } from 'react-router-dom'

function SidebarChat({ name, addNewChat, id }) {
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 10000))
    }, [])

    useEffect(() => {
        if(id){
            db.collection('Chat Room').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>setMessages(snapshot.docs.map(doc=>doc.data())))
        }
    }, [id])

    const createNewChat = () => {
        const roomName = prompt('Add new chat')
        if (roomName) {
            db.collection('Chat Room').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        (
            <Link to={`/rooms/${id}`}>
                <div className='chat'>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                    <div className="chatInfo">
                        <h4>{name}</h4>
                        <p>{messages[0]?.message}</p>
                    </div>
                </div>
            </Link>
        )
    ) :
        (
            <div onClick={createNewChat} className="newChat">
                <h2 className='addNewChat'>Click to Add new Chat</h2>
            </div>
        )
}

export default SidebarChat
