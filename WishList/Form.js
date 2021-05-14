import React, { useState } from 'react'
import './Form.css'

function Form() {
    const [input, setInput] = useState('')
    
    const listAppend = (e) => {
        e.preventDefault()
        let addPara=document.createElement('P')
        addPara.className='tagline'
        addPara.innerText='Adding items to your Wish List '+String.fromCodePoint(128512)
        let formAppend=document.getElementsByClassName('formAppend')
        formAppend.item(0).replaceChild(addPara,formAppend.item(0).childNodes[1])
        let list = document.getElementsByClassName('orderedList')
        let listDOM = document.createElement('LI')
        listDOM.innerText = input;
        let i=list.item(0).childElementCount
        while(i--){
            let listItem=list.item(0).childNodes[i]
            if(listItem.innerText==listDOM.innerText){
                list.item(0).removeChild(listItem)
            }
        }
        list.item(0).insertBefore(listDOM,list.item(0).childNodes[0])
        setInput('')
    }

    const resetInput = () => {
        setInput('')
    }

    const resetList = () => {
        // let removePara=document.getElementsByClassName('tagline')
        let removePara=document.createElement('P')
        removePara.className='tagline';
        removePara.innerText='Wish List Removed '+String.fromCodePoint(128546)
        let formAppend=document.getElementsByClassName('formAppend')
        formAppend.item(0).replaceChild(removePara,formAppend.item(0).childNodes[1])
        let list = document.getElementsByClassName('orderedList')
        let i=list.item(0).childElementCount
        while(i--){
            let listItem=list.item(0).childNodes[i]
            list.item(0).removeChild(listItem)
        }
    }

    return (
        <div className='formAppend'>
            <h1>WISH LIST</h1>
            <p className='tagline'>Add items to your Wish List &#128512;</p>
            <form action="">
                <input type="text" className='input' value={input} onChange={e => setInput(e.target.value)} placeholder='Type to append to the list' />
                <button className='btn' id="btnAppend" onClick={listAppend}>Append</button>
                <button className='btn' id="btnReset" type='reset' onClick={resetInput} >Reset Input</button>
                <button className='btn' id="btnResetList" type='reset' onClick={resetList} >Reset List</button>
            </form>
            <ol className="orderedList">
            </ol>
        </div>
    )
}

export default Form
