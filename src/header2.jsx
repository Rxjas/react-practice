import React from 'react';

const headerData = {text: 'Hello object', text1: 'World Object', text2: 'HEADer Object'};
const headerData2= [{text: 'Hello'}, {text: 'World'}, {text: 'HEADer'}];

function Header2 (props){
//   console.log(Object.keys(props.text))

    return(
        <>
        {/* <div>
         {headerData2.map((data, index) => {
            //return the header element per every item
            return(
                <p key={index}>{data.text}</p>
            )
        })}
        </div> */}

        <div>
         {Object.keys(headerData).map((key) => {
             return(
                 <li >{headerData[key]}</li>
             )
         })}
        </div>


        <h3>{props.title}</h3>
        </>
    )
};

export default Header2