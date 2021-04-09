import React from 'react'

function Header (props){
    function log(){console.log("You CLicked this guy")}
    return(
        <>
        <h3>{props.text}</h3>
        <p>time to pary prior to children</p>
        {props.children}
        <div>
            <h1>{props.myTitle}</h1>
        </div>

        <button onClick={log}>Click Me</button>
        </>
    )
};

export default Header; 