import React, { Component } from 'react';

class App extends React.Component{
  state = {
    firstName: '',
    lastName: ''
  }
  
  handleLogin = (event) => {
   event.preventDefault();
  };

  render(){
  return (
    <>
    <div>
      <h1>Login</h1>

      <form>
        <input type='text' placeholder='First Name'></input>
        <input type='text' placeholder='Last Name'></input>
        <button onClick={this.handleLogin}>Submit</button>
      </form>
      
    </div>
    </>
  )
}
};

export default App;
