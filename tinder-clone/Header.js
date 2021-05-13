import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom'

function Header(props) {
    const history = useHistory()
    return (
        <div className='header'>
            {props.backButton ?
                (
                    <IconButton onClick={() => history.replace(props.backButton)}>
                        <ArrowBackIosIcon fontSize='medium' className='header__icon'></ArrowBackIosIcon>
                    </IconButton>
                ) :
                (
                    <IconButton>
                        <PersonIcon fontSize='large' className='header__icon'></PersonIcon>
                    </IconButton>
                )
            }
            <Link to='/'>
                <img id='logo' src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png" alt="Tinder Logo" />
            </Link>
            <Link to='/chats'>
                <IconButton>
                    <QuestionAnswerIcon fontSize='large' className='header__icon'></QuestionAnswerIcon>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
