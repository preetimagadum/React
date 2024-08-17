import React from 'react'
import CompC from './CompC'

let CompB=(props)=> {
  return (
    <div>
        <h1>Component B</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <CompC />
    </div>
  )
} 

export default CompB