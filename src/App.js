import React from 'react'
import Header from './header'
import { Message, Message2 } from './message'

function App() {
  return (
    <>
    <Header myTitle = "go time">
      <h1>Test time</h1>
    </Header>
    <Message></Message>
    <Message2></Message2>
    <h1>Test Hooray</h1>
    </>
  );
}

export default App;
