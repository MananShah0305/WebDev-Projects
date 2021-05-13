import React, { useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css'
import { useParams } from 'react-router-dom'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name:'Mark',
            message:'Hello developers!!!!',
        },
        {
            message:"Heyyy,What's up?",
        }
    ])
    const { person } = useParams()

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }])
        setInput("");
    }
    return (
        <div className='chatScreen'>
            <p className='title'>{`YOU MATCHED WITH ${person.toUpperCase()} ON ${(1 + Math.floor(Math.random() * 30))}/${(1 + Math.floor(Math.random() * 12))}/20${(16 + Math.floor(Math.random() * 4))}`}</p>
            {messages.map(message => (
                message.name ?
                (
                    <div className='messages'>
                            <Avatar className='chatImage' alt={person} src={person.substring(0,1)}></Avatar>
                            <p className='chatMessageUser'>{message.message}</p>
                        </div>
                    ) :
                    (   
                        <div className='messages'>
                            <p className='chatMessageOwn'>{message.message}</p>
                        </div>
                    )

            ))
            }
            <form action="none" className="chatOption">
                <input value={input} placeholder='Type a message....' onChange={e => setInput(e.target.value)} type="text" className='input' />
                <button type='submit' onClick={handleSend} className='btn'>Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
