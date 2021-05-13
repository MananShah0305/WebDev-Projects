import React ,{useState,useEffect} from 'react'
import './Navbar.css'
function Navbar() {
    const [scroll,setScroll]=useState()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setScroll(true)
            }
            else{
                setScroll(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])
    return (
        <div className={`navbar ${scroll&&'nav100'}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="logo"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png" alt="Avatar" className="avatar"/>
        </div>
    )
}

export default Navbar
