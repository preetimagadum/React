import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h1>Student component</h1>
        <h1>Emp id: {props.id}</h1>
        <h1>Emp Name:{props.name}</h1>

    </div>
  )
}

export default Student