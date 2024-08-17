import React, { Component } from 'react'
import CompB from './CompB'
export class CompA extends Component {
    emp={
        eid:'101',
        ename:'Rahul'
    }
  render() {
    return (
      <div>
        <h1>ComponentA</h1>
         <CompB emp_Data={this.emp}/>
      </div>
    )
  }
}

export default CompA