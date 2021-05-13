import React,{useState,useEffect} from 'react'
import './ChatSection.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {useParams} from 'react-router-dom';
import db from './firebase'
import firebase from 'firebase';
import {useStateValue} from './StateProvider.js'

function ChatSection() {
    const [input,setInput]=useState('')
    const {roomId}=useParams()
    const [roomName,setRoomName]=useState('')
    const [messages,setMessages]=useState([])
    const [{user},dispatch]=useStateValue()
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 10000))
    }, [])

    useEffect(()=>{
        if(roomId){
            db.collection('Chat Room').doc(roomId).onSnapshot(snapshot=>setRoomName(snapshot.data().name))
            db.collection('Chat Room').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot=>setMessages(snapshot.docs.map(doc=>doc.data())))
        }
    },[roomId])

    const sendMessage=(event)=>{
        event.preventDefault();

        db.collection('Chat Room').doc(roomId).collection('messages').add({
            message:input,
            name:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }

    return (
        <div className='chatSection'>
            <div className="chatHeader">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                <div className="chatHeaderInfo">
                    <h2>{roomName}</h2>
                    <div className='info'>Last seen{" "}{new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</div>
                </div>
                <div className="chatHeaderOptions">
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className="chatBody">
                {messages.map(message=>(
                    <div className={`message  ${message.name===user.displayName&&'chatReceiver'}`}>
                        <p className='chatPerson'>{message.name}</p>
                        <span className="chatMessage">{message.message}</span>
                        <span className="chatTimeStamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </div>
                ))}
            </div>
            <div className="chatFooter">
                <IconButton>
                    <InsertEmoticonIcon></InsertEmoticonIcon>
                </IconButton>
                <IconButton>
                    <AttachFile></AttachFile>
                </IconButton>
                <form action="">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" className="chatMessageSend" placeholder='Type a message'/>
                </form>
                <IconButton onClick={sendMessage} className="send" type='submit'>
                    {input?( <SendIcon></SendIcon> ):(<MicIcon></MicIcon>)}
                </IconButton>
            </div>
        </div>
    )
}

export default ChatSection
