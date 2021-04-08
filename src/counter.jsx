import React, { Component } from 'react';

class Counter extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0,
      message: "Hello World" 
    };

    this.name = "testet tester"
  }

  // Cant define return, working in an object
  render() {
    return(
      <div>
        Your count is: {this.state.count}
        <button onClick={() => this.setState({ count: ++this.state.count })}>Increment count</button>
        <button onClick={() => this.setState({ count: --this.state.count })}>Decrease count</button>
        <h3>{this.state.message}</h3>
      </div>
    )
  }

};

export default Counter;
