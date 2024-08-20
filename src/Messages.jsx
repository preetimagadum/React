import React from 'react'
import './Messages.css'
const Messages = () => {
    let msgStyle_Internal={color:"Blue", backgroundColor:"aqua"}
  return (
    <div>
        <h1>Message Component</h1>
        <h2 style={{color:'red',backgroundColor:'yellow'}}>Good Morning</h2>
        <h2 style={msgStyle_Internal}>Good Afternoon</h2>
        <h2 className={'msgStyle2'}>Good Evening</h2>
    </div>
  )
}

export default Messages