import React from 'react'
import Chat from './Chat.js'

function Chats() {
    return (
        <div className='chats'>
            <Chat name='Harry' message='Hi!Whats-Up dude' timestamp='2 hours ago' profilePicture='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/prince-harry-duke-of-sussex-visits-croke-park-home-of-news-photo-1578512299.jpg'></Chat>
            <Chat name='James' message='Long time no see' timestamp='20 minutes ago' profilePicture='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mike_James_2019_%28cropped%29.jpg/220px-Mike_James_2019_%28cropped%29.jpg'></Chat>
            <Chat name='John' message='Meeting is in 5 minutes' timestamp='4 seconds ago' profilePicture='https://static.toiimg.com/photo/71195358.cms'></Chat>
            <Chat name='Mark' message='OK,you are right!' timestamp='2 days ago' profilePicture='https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg'></Chat>
        </div>
    )
}

export default Chats
