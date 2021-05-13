import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase.js'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {
    const [{},dispatch]=useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch(error=>{alert(error.message)})
    }
    return (
        <div className='login'>
            <div className="loginLogo">
                <img src='http://pngimg.com/uploads/whatsapp/whatsapp_PNG21.png' alt="Whatsapp logo" />
                <div className="loginText">
                    <h2>Sign in to whatsApp</h2>
                </div>
                <Button type='submit' onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
