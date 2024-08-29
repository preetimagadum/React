import React from 'react'
import CompD from './CompD'
let CompC=(props)=> {
  return (
    <div>
        <h1>ComponentC</h1>
        <pre>{JSON.stringify(this.props)}</pre>

        <CompD />
    </div>
  )
}

export default CompC