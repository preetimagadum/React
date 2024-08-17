import React, { Component } from 'react'

export class User extends Component {
    state={
        msg:"Hello"
    }
    updateHandler=(value)=>{
        this.setState({msg:value})
    }
  render() {
    return (
      <div>
         <h1>Event Binding:{this.state.msg}</h1>
        <button onClick={this.updateHandler.bind(this,"GM")}>gm</button>
        <button onClick={this.updateHandler.bind(this,"GA")}>ga</button>
        <button onClick={this.updateHandler.bind(this,"GE")}>ge</button>
        <button onClick={this.updateHandler.bind(this)}>gn</button>
      </div>
    )
  }
}

export default User