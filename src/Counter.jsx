import React, { useState } from 'react'

const Counter = () => {
    let [counter,setCounter]=useState(1)
    let [fact,setFact]=useState(4)

  return (
    <div>
      <button>Counter Value:{Counter}</button>
    </div>
  )
}

export default Counter