import React, { useState } from 'react'
 let Binding=()=> {
 let [msg, setMsg]=useState("Hello")
 
  return (
    <div>
     <h1>Binding in function</h1>
     <h3>value:{msg}</h3>
     <button onClick={setMsg.bind(null,"GM")}>gm</button>
     <button onClick={setMsg.bind(null,"GA")}>ga</button>
     <button onClick={setMsg.bind(null,"GE")}>ge</button>
     <button onClick={setMsg.bind(null,"GN")}>gn</button>

    </div>
  )
}

export default Binding