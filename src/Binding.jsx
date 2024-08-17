import React, { useState } from 'react'
 let Binding=()=> {
 let [msg, setMsg]=useState("Hello")
 let updateHandler=(value)=>{
        setMsg(value)
    }
  return (
    <div>
     <h1>Binding in function</h1>
     <h3>value:{msg}</h3>
     <button onClick={updateHandler.bind(null,"GM")}>gm</button>
     <button onClick={updateHandler.bind(null,"GA")}>ga</button>
     <button onClick={updateHandler.bind(null,"GE")}>ge</button>
     <button onClick={updateHandler.bind(null,"GN")}>gn</button>

    </div>
  )
}

export default Binding