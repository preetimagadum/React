
import React, { useState } from 'react'

function Message() {
  let [msg, setMsg]=useState("hello");

  let gmHandler=()=>{
    setMsg("GM")
  }
  let gnHandler=()=>{
    setMsg("GN")
  }
  return (
    <div>
      <h2>Message Component</h2>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message