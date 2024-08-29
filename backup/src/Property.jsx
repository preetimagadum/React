import React, { useState } from 'react'

function Property() {
    let [qty, setQty]=useState(1)
    let increHandler=()=>{
        setQty(qty +1)
    }
    let decreHandler=()=>{
        setQty(qty -1)
    }
  return (
    <div>
     <h2>Property Component</h2>
     <h1>Quentity:{qty}</h1>
     <button onClick={increHandler}>+</button>
     {qty}
     <button onClick={decreHandler}>-</button>
    </div>
  )
}

export default Property