import React, { useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import db from './firebase.js'

function TinderCards() {
    const [people, setPeople] = useState([]);
    //  const [names,setNames]=useState([])
    
    useEffect(() => {
        db.collection('cards').onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())))//snapshot.docs will get us all the documents
    }, [])
    
    //     const swiped=(direction,name)=>{
    //     console.log('You swiped '+direction)
    //     if(direction=='right'){
    //         setNames([...names,{name:name}])
    //         console.log(name)
    //     }
    //     else{
    //         console.log('error')
    //     }
    //     console.log(names)
    // }
    const swiped=(direction)=>{
        console.log('You swiped '+direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        // <div className='tinderCards'>//Not a necessary div
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard className='swipe' key={person.name} preventSwipe={['up','down']} onSwipe={swiped} onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: `url(${person.imgUrl})` }} className='card'>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
        // </div>


    )
}

// export {names}
export default TinderCards