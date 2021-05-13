import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import {Link} from 'react-router-dom'

function Chat(props) {
    return (
        <Link to={`/chats/${props.name}`}>
        <div className="chat">
            <Avatar alt={props.name} src={props.profilePicture} className='dp' />
            <div className='details'>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>
            <p className='timestamp'>{props.timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
