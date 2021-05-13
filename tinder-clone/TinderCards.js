import React, { useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import db from './firebase.js'

function TinderCards() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        db.collection('cards').onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())))
    }, [])
   
    const swiped=(direction)=>{
        console.log('You swiped '+direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']} onSwipe={swiped} onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: `url(${person.imgUrl})` }} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
