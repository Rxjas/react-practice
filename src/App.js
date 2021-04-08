import React, { Component } from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      count: 0 
    };

    this.name = "testet tester"
  }

  // Cant define return, working in an object
  render() {
    return(
      <div>
        Your count is: {this.state.count}
        <button onClick={() => this.setState({ count: ++this.state.count })}>Increment count</button>
      </div>
    )
  }

};

export default App;
