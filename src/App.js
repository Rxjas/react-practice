import React from 'react'
import Header from './header'
import Header2 from './header2'
import { Message, Message2 } from './message'

const headerData = [
  {text: 'Hello'},
  {text: 'World'},
  {text: 'HEADer'}
]

function App() {
  return (
    <>
    //time to map through the array
    {headerData.map((data) => {

      //return the header element per every item
      return(
        <Header2 text={data.text}></Header2>
      )
    })}

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
