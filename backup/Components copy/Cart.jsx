import React from 'react'

const Cart = (props) => {
  return (
    <div>
        <h2>Cart component</h2>
        <pre>{JSON.stringify(props)}</pre>
        
    </div>
  )
}

export default Cart