import React, { Component } from 'react'

export class Product extends Component {
    state={
        Qty:1
    }
    increHandler=()=>{
        this.setState({Qty:this.state.Qty +1})
    }
    derceHandler=()=>{
        this.setState({Qty:this.state.Qty -1})
    }
  render() {
    return (
      <div>
        <button onClick={this.increHandler}>+</button>
        {this.state.Qty}
        <button onClick={this.derceHandler}>-</button>
        </div>
    )
  }
}

export default Product